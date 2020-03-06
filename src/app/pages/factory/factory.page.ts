import { Component, OnInit, ɵɵgetInheritedFactory, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyConfig } from 'src/app/data/config';
import { Factory } from 'src/app/data/factory';
import { ModalController, PopoverController, LoadingController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/base-ui';
import { ColorPage } from '../color/color.page';
import { MapPage } from '../map/map.page';
import { SignaturePage } from '../signature/signature.page';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.page.html',
  styleUrls: ['./factory.page.scss'],
})
export class FactoryPage extends BaseUI implements OnInit, AfterViewInit {

  private typeId: string;     // 模型分类
  private modelNo: string;    // 模型编号
  private modelName: string;  // 模型名称
  private imgUrl: string;     // 模型图片地址
  private factory = [];       // 模型数据
  private isFront = true;     // 当前模型是否为正面
  private frontMapDiv: HTMLElement;
  private backMapDiv: HTMLElement;
  private signature: HTMLElement;

  /* 模型参数 */
  private picture = 0;          // 正面与背面的图片
  private mapLst = [0, 0];      // 正背面贴图ID
  private mapIndex: number;     // 贴图编号

  constructor(
    activedRoute: ActivatedRoute,
    private config: MyConfig,
    private router: Router,
    public modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private loadingCtrl: LoadingController) {
    super();
    this.typeId = activedRoute.snapshot.params.typeId;
    this.modelNo = activedRoute.snapshot.params.modelNo;
    this.modelName = activedRoute.snapshot.params.modelName;
  }

  ngOnInit() {
    const num = Number(this.modelNo);
    this.initFactory(this.typeId, num - 1);
    this.imgUrl = this.factory[this.picture].front;
  }

  // 初始化工厂数据
  initFactory(typeId: string, num: number) {
    if (typeId === '1') {
      this.factory = Factory.hotFactory[num].factory;
    } else if (typeId === '2') {
      this.factory = Factory.manFactory[num].factory;
    } else if (typeId === '3') {
      this.factory = Factory.womanFactory[num].factory;
    } else if (typeId === '4') {
      this.factory = Factory.childFactory[num].factory;
    } else {
      this.factory = Factory.antiqueFactory[num].factory;
    }
  }

  ngAfterViewInit(): void {
    this.frontMapDiv = document.getElementById('frontMap');
    this.backMapDiv = document.getElementById('backMap');
    this.signature = document.getElementById('signature');
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
      this.signature.hidden = false; // 显示签名
      this.signature.innerHTML = data.signature;
    }
  }

  // 更多参数选择
  more() {
    console.log('more');
  }

  // 实时评分
  score() {
    console.log('score');
  }

  // 取消设计
  cancel() {
    console.log('cancel');
  }
  // 保存设计稿，跳转评分页面
  save() {
    console.log('save');
  }
}
