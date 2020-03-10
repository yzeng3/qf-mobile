import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyConfig } from 'src/app/data/config';
import { Factory } from 'src/app/data/factory';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/base-ui';
import { ColorPage } from '../color/color.page';
import { MapPage } from '../map/map.page';
import { SignaturePage } from '../signature/signature.page';
import { MoreDesignPage } from '../more-design/more-design.page';
import { CancelPage } from 'src/app/common/cancel/cancel.page';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.page.html',
  styleUrls: ['./factory.page.scss'],
})
export class FactoryPage extends BaseUI implements OnInit, AfterViewInit {

  private typeId: string;     // 模型分类
  private index: string;      // 地址下标
  private modelName: string;  // 模型名称
  private imgUrl: string;     // 模型图片地址
  private factory = [];       // 模型数据
  private isFront = true;     // 当前模型是否为正面
  private frontMapDiv: HTMLElement;
  private backMapDiv: HTMLElement;
  private signatureDiv: HTMLElement;

  /* 模型参数 */
  private picture = 0;          // 正面与背面的图片
  private mapLst = [-1, -1];      // 正背面贴图ID
  private mapIndex: number;     // 贴图编号
  private signature = '';       // 签名

  constructor(
    activedRoute: ActivatedRoute,
    private config: MyConfig,
    private router: Router,
    private fac: Factory,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    super();
    this.typeId = activedRoute.snapshot.params.typeId;
    this.index = activedRoute.snapshot.params.index;
    this.modelName = activedRoute.snapshot.params.modelName;
  }

  ngOnInit() {
    this.initFactory(this.typeId, Number(this.index));
    this.imgUrl = this.factory[this.picture].front;
  }

  // 初始化工厂数据
  initFactory(typeId: string, index: number) {
    if (typeId === '1') {
      this.factory = Factory.hotFactory[index].factory;
    } else if (typeId === '2') {
      this.factory = Factory.manFactory[index].factory;
    } else if (typeId === '3') {
      this.factory = Factory.womanFactory[index].factory;
    } else if (typeId === '4') {
      this.factory = Factory.childFactory[index].factory;
    } else {
      this.factory = Factory.antiqueFactory[index].factory;
    }
  }

  ngAfterViewInit(): void {
    this.frontMapDiv = document.getElementById('frontMap');
    this.backMapDiv = document.getElementById('backMap');
    this.signatureDiv = document.getElementById('signature');
  }

  // 切换模型正背面
  modelChanged(ev: any) {
    const value = ev.detail.value;
    if (value === 'front') { // 点击正面按钮
      this.imgUrl = this.factory[this.picture].front;
      this.backMapDiv.hidden = true;   // 隐藏背面贴图
      this.frontMapDiv.hidden = false; // 显示正面贴图
      this.isFront = true;
    } else {
      this.imgUrl = this.factory[this.picture].back;
      this.frontMapDiv.hidden = true;   // 隐藏正面贴图
      this.backMapDiv.hidden = false;   // 显示背面贴图
      this.isFront = false;
    }
  }

  // 颜色选择
  async setColor() {
    const modal = await super.presentModal(this.modalCtrl, ColorPage, this.factory, true, 'color-modal');
    const { data } = await modal.onWillDismiss();
    const loading = await super.presentLoading(this.loadingCtrl, '加载中...', 2000);
    // 切换图片，达到换色效果
    if (data !== undefined) {
      this.picture = Number(data._id);
      this.imgUrl = this.factory[this.picture].front;
    }
    loading.dismiss();
  }

  // 贴图
  async setMap() {
    const modal = await super.presentModal(this.modalCtrl, MapPage, null, false, 'map-modal');
    const { data } = await modal.onWillDismiss();
    const loading = await super.presentLoading(this.loadingCtrl, '加载中...', 2000);
    // 返回用户选中贴图的 id 以加载相应图片
    if (data !== undefined) {
      this.mapIndex = Number(data._id);
      if (this.isFront) { // 如果是正面
        this.mapLst[0] = this.mapIndex;
        this.frontMapRemove(this.mapIndex);
      } else {
        this.mapLst[1] = this.mapIndex;
        this.backMapRemove(this.mapIndex);
      }
    }
    loading.dismiss();
  }

  // 正面贴图
  frontMapRemove(id: number) {
    this.frontMapDiv.hidden = false; // 显示贴图
    this.frontMapDiv.innerHTML = '<img src="' + this.config.apiUrl + Factory.mapFactory[id].itemPath + '"></img>';
  }

  // 背面贴图
  backMapRemove(id: number) {
    this.backMapDiv.hidden = false; // 显示贴图
    this.backMapDiv.innerHTML = '<img src="' + this.config.apiUrl + Factory.mapFactory[id].itemPath + '"></img>';
  }

  // 签名
  async sign() {
    const modal = await super.presentModal(this.modalCtrl, SignaturePage, null, true, 'signature-modal');
    const { data } = await modal.onWillDismiss();
    if (data !== undefined && data !== '') {
      this.signatureDiv.hidden = false; // 显示签名
      this.signatureDiv.innerHTML = data.signature;
      this.signature = data.signature;  // 暂存签名
    }
  }

  // 更多参数选择
  async more() {
    const modal = await super.presentModal(this.modalCtrl, MoreDesignPage,
      { typeId: this.typeId, index: this.index, modelName: this.modelName }, false, '');
  }

  // 实时评分
  score() {
    console.log('score');
  }

  // 取消设计
  async cancel() {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '退出提示', text: '您是否确认退出设计，退出之后，您的设计数据都将被清空!' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res === '1') { // 清空所有记录
      this.fac.colorId = '0';
      this.fac.moreDesign = [];
      this.fac.designDraft = [];
      this.router.navigate(['tabs/design']);
    }
  }
  // 保存设计稿，跳转评分页面
  save() {
    if (this.fac.moreDesign.length === 0) {
      const toast = super.presentToast(this.toastCtrl, '请将[更多设计]里的参数填写完成，否则不能生成设计稿', 2500, 'top');
    } else {
      this.fac.designDraft = this.fac.moreDesign;

      // 存入颜色选择
      const len = this.fac.designDraft.length;
      const myColor = { itemNo: len.toString(), itemName: '颜色', supplement: '选择的服装颜色', option: this.fac.colorId };
      this.fac.designDraft.push(myColor);

      // 存入个性签名
      const mySignature = { itemNo: (len + 1).toString(), itemName: '签名', supplement: '服装上的个性签名', option: this.signature };
      this.fac.designDraft.push(mySignature);

      // 存入贴图选择
      const myMaps = { itemNo: (len + 2).toString(), itemName: '贴图', supplement: '正背面贴图', option: this.mapLst };
      this.fac.designDraft.push(myMaps);
    }
  }
}
