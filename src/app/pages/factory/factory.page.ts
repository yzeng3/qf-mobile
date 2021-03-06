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
import { QfDictionary } from 'src/app/services/util/qfDictionary';
import { InputModalPage } from 'src/app/common/input-modal/input-modal.page';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { Clone } from 'src/app/services/util/clone';
import { ScoreModalPage } from 'src/app/common/score-modal/score-modal.page';

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
  private mapLst = [-1, -1];    // 正背面贴图ID
  private mapIndex: number;     // 贴图编号
  private signature = '';       // 签名
  private score = '';           // 评分

  constructor(
    activedRoute: ActivatedRoute,
    private config: MyConfig,
    private router: Router,
    private fac: Factory,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private factoryService: FactoryService) {
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
  async getScore() {
    if (this.fac.moreDesign.length === 0) {
      super.presentToast(this.toastCtrl, '请将->[更多设计]->里的参数填写完成,否则无法计算评分', 2100, 'middle');
    } else {
      // 生成模型数据
      const myDraft = new QfDictionary();
      for (const item of this.fac.moreDesign[0].fixed) {
        myDraft.set(item.opt_header, item.opt_name);
      }
      const temClone = Clone.deepClone(this.fac.moreDesign); // 克隆一份
      temClone.shift(); // 去掉第一个
      for (const item of temClone) {
        myDraft.set(item.item_header, item.option);
      }
      myDraft.set('type', 'draft'); // 评分类型为设计稿
      myDraft.set('image_front', this.factory[this.picture].front);
      myDraft.set('image_back', this.factory[this.picture].back);
      // 正面与背面的截图
      myDraft.set('img_f', this.factory[this.picture].front);
      myDraft.set('img_b', this.factory[this.picture].back);
      myDraft.set('signature', this.signature);
      if (this.mapLst[0] >= 0) {
        myDraft.set('printing_front', Factory.mapFactory[this.mapLst[0]].itemPath);
      } else {
        myDraft.set('printing_front', '');
      }
      if (this.mapLst[1] >= 0) {
        myDraft.set('printing_back', Factory.mapFactory[this.mapLst[1]].itemPath);
      } else {
        myDraft.set('printing_back', '');
      }
      const modal = await super.presentModal(this.modalCtrl, ScoreModalPage, myDraft.item, false, 'score-common-modal');
      const { data } = await modal.onDidDismiss();
      this.score = data.res;
    }
  }

  // 取消设计
  async cancel() {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '退出提示', text: '您是否确认退出设计，退出之后，您的设计数据都将被清空!' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) { // 清空所有记录
      this.fac.colorId = '0';
      this.fac.moreDesign = [];
      this.fac.designDraft = [];
      this.score = '';
      this.router.navigate(['tabs/design']);
    }
  }
  // 保存设计稿，跳转评分页面
  async save() {
    if (this.fac.moreDesign.length === 0) {
      super.presentToast(this.toastCtrl, '请将->[更多设计]->里的参数填写完成,否则不能生成设计稿', 2300, 'middle');
    } else if (this.score.length === 0) {
      super.presentToast(this.toastCtrl, '请点击->[实时评分]->完成评分计算,否则不能生成设计稿', 2300, 'middle');
    } else {
      const modal = await super.presentModal(this.modalCtrl, InputModalPage,
        { title: '输入', text: '设计稿名称,最长20个字包括符合' }, false, 'input-modal');
      const { data } = await modal.onDidDismiss();
      if (data.res) {
        const loading = await super.presentLoading(this.loadingCtrl, '正在保存...', 2000);
        // 生成模型数据
        const myModel = new QfDictionary();
        myModel.set('user_id', window.localStorage.getItem('user_id'));
        myModel.set('model_name', data.name);
        myModel.set('score', this.score);
        myModel.set('category', this.modelName);
        myModel.set('belong', '50');
        for (const item of this.fac.moreDesign[0].fixed) {
          myModel.set(item.opt_header, item.opt_name);
        }
        const temClone = Clone.deepClone(this.fac.moreDesign); // 克隆一份
        temClone.shift(); // 去掉第一个
        for (const item of temClone) {
          myModel.set(item.item_header, item.option);
        }
        myModel.set('color', this.factory[this.picture].name);
        myModel.set('image_front', this.factory[this.picture].front);
        myModel.set('image_back', this.factory[this.picture].back);
        // 正面与背面的截图
        myModel.set('img_f', this.factory[this.picture].front);
        myModel.set('img_b', this.factory[this.picture].back);
        myModel.set('status', '1');
        myModel.set('signature', this.signature);
        if (this.mapLst[0] >= 0) {
          myModel.set('printing_front', Factory.mapFactory[this.mapLst[0]].itemPath);
        }
        if (this.mapLst[1] >= 0) {
          myModel.set('printing_back', Factory.mapFactory[this.mapLst[1]].itemPath);
        }
        this.factoryService.postModelData('api/factory', myModel.item,
          (res: any) => {
            if (res.code === 1) {
              loading.dismiss();
              // 清空记录
              this.fac.colorId = '0';
              this.fac.moreDesign = [];
              this.fac.designDraft = [];
              this.router.navigate(['tabs/draft']);
              super.presentToast(this.toastCtrl, res.msg, 1500, 'middle', 'primary');
            } else {
              super.presentToast(this.toastCtrl, res.msg, 2000, 'middle', 'danger');
            }
          }, (err: any) => {
            console.log(err);
            super.presentToast(this.toastCtrl, '网络出错,请重新尝试');
          }
        );
      } else {
        super.presentToast(this.toastCtrl, '设计稿名称是必填项!', 2000, 'middle');
      }
    }
  }

}
