import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseUI } from 'src/app/common/base-ui';
import { ActivatedRoute, Router } from '@angular/router';
import { MyConfig } from 'src/app/data/config';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { MapModalPage } from 'src/app/common/map-modal/map-modal.page';
import { CancelPage } from 'src/app/common/cancel/cancel.page';
import { SignaturePage } from '../signature/signature.page';
import { ColorModalPage } from 'src/app/common/color-modal/color-modal.page';
import { ParamModalPage } from 'src/app/common/param-modal/param-modal.page';
import { ScoreModalPage } from 'src/app/common/score-modal/score-modal.page';
import { Clone } from 'src/app/services/util/clone';
import { InputModalPage } from 'src/app/common/input-modal/input-modal.page';

@Component({
  selector: 'app-store-design',
  templateUrl: './store-design.page.html',
  styleUrls: ['./store-design.page.scss'],
})
export class StoreDesignPage extends BaseUI implements OnInit, AfterViewInit {

  private model: any; // 模型数据
  private modelId: string;     // 模型分类
  private imgUrl: string;     // 模型图片地址
  private imgFrontLst = [];
  private imgBackLst = [];
  private imgFrontUrl = '';
  private imgBackUrl = '';
  private maps = [];
  private isFront = true;     // 当前模型是否为正面
  private frontMapDiv: HTMLElement;
  private backMapDiv: HTMLElement;
  private signatureDiv: HTMLElement;

  constructor(
    activedRoute: ActivatedRoute,
    private config: MyConfig,
    private router: Router,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private factoryService: FactoryService) {
    super();
    this.modelId = activedRoute.snapshot.params.modelId;
  }

  ngOnInit() {
    this.getModel();
  }

  ngAfterViewInit(): void {
    this.frontMapDiv = document.getElementById('frontMap');
    this.backMapDiv = document.getElementById('backMap');
    this.signatureDiv = document.getElementById('signature');
  }

  // 得到该店铺上架的所以可设计模型
  async getModel() {
    const load = await super.presentLoading(this.loadingCtrl, '加载数据中');
    this.factoryService.getModelById('api/model', { model_id: this.modelId },
      (res: any) => {
        load.dismiss();
        this.model = res;
        this.imgFrontLst = res.image_front.split(',');
        this.imgBackLst = res.image_back.split(',');
        this.maps = res.printing_front.split(',');
        this.imgUrl = res.img_f;
        this.imgFrontUrl = res.img_f;
        this.imgBackUrl = res.img_b;
        this.model.image_front = this.imgFrontUrl;
        this.model.image_back = this.imgBackUrl;
      }, () => {
        load.dismiss();
        super.presentToast(this.toastCtrl, '加载数据失败,请检查网络');
      });
  }

  // 切换模型正背面
  modelChanged(ev: any) {
    const value = ev.detail.value;
    if (value === 'front') { // 点击正面按钮
      this.imgUrl = this.imgFrontUrl;
      this.backMapDiv.hidden = true;   // 隐藏背面贴图
      this.frontMapDiv.hidden = false; // 显示正面贴图
      this.isFront = true;
    } else {
      this.imgUrl = this.imgBackUrl;
      this.frontMapDiv.hidden = true;   // 隐藏正面贴图
      this.backMapDiv.hidden = false;   // 显示背面贴图
      this.isFront = false;
    }
  }

  // 颜色选择
  async setColor() {
    if (this.isFront) {
      const modal = await super.presentModal(this.modalCtrl, ColorModalPage, this.imgFrontLst, true, 'color-modal');
      const { data } = await modal.onWillDismiss();
      // 切换图片，达到换色效果
      if (data !== undefined) {
        this.imgFrontUrl = data.res;
        this.imgUrl = this.imgFrontUrl;
        this.model.image_front = this.imgFrontUrl;
      }
    } else {
      const modal = await super.presentModal(this.modalCtrl, ColorModalPage, this.imgBackLst, true, 'color-modal');
      const { data } = await modal.onWillDismiss();
      // 切换图片，达到换色效果
      if (data !== undefined) {
        this.imgBackUrl = data.res;
        this.imgUrl = this.imgBackUrl;
        this.model.image_back = this.imgBackUrl;
      }
    }
  }

  // 贴图
  async setMap() {
    const modal = await super.presentModal(this.modalCtrl, MapModalPage, this.maps, false, 'map-modal');
    const { data } = await modal.onWillDismiss();
    // 返回用户选中贴图的 id 以加载相应图片
    if (data !== undefined) {
      if (this.isFront) { // 如果是正面
        this.model.printing_front = data.res;
        this.frontMapDiv.hidden = false; // 显示贴图
        this.frontMapDiv.innerHTML = '<img src="' + this.config.apiUrl + data.res + '"></img>';
      } else {
        this.model.printing_back = data.res;
        this.backMapDiv.hidden = false; // 显示贴图
        this.backMapDiv.innerHTML = '<img src="' + this.config.apiUrl + data.res + '"></img>';
      }
    }
  }

  // 签名
  async sign() {
    const modal = await super.presentModal(this.modalCtrl, SignaturePage, null, true, 'signature-modal');
    const { data } = await modal.onWillDismiss();
    if (data !== undefined && data !== '') {
      this.signatureDiv.hidden = false; // 显示签名
      this.signatureDiv.innerHTML = data.signature;
      this.model.signature = data.signature; // 存入签名
    }
  }

  // 更多参数选择
  async more() {
    const modal = await super.presentModal(this.modalCtrl, ParamModalPage, this.model, false, '');
    const { data } = await modal.onDidDismiss();
    if (data !== undefined) {
      data.forEach((e: any) => {
        if (e.key === 'shellFabric') {
          this.model.shell_fabric = e.value;
        } else if (e.key === 'size') {
          this.model.size = e.value;
        } else if (e.key === 'sleeveLeftColor') {
          this.model.sleeve_left_color = e.value;
        } else if (e.key === 'sleeveRightColor') {
          this.model.sleeve_right_color = e.value;
        } else if (e.key === 'trouserLeftColor') {
          this.model.trouser_left_color = e.value;
        } else if (e.key === 'trouserRightColor') {
          this.model.trouser_right_color = e.value;
        }
      });
    }
  }

  // 评分
  async getScore() {
    const temClone = Clone.deepClone(this.model); // 克隆一份
    temClone.type = 'draft'; // 评分类型为设计稿
    const modal = await super.presentModal(this.modalCtrl, ScoreModalPage, temClone, false, 'score-common-modal');
    const { data } = await modal.onDidDismiss();
    this.model.score = data.res;
  }

  // 取消设计
  async cancel() {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '退出提示', text: '您是否确认退出设计，退出之后，您的设计数据都将被清空!' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      this.router.navigate(['tabs/home']);
    }
  }

  // 保存设计稿，跳转评分页面
  async save() {
    const modal = await super.presentModal(this.modalCtrl, InputModalPage,
      { title: '输入', text: '设计稿名称,最长20个字包括符合' }, false, 'input-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      const loading = await super.presentLoading(this.loadingCtrl, '正在保存...', 2000);
      // 保存设计稿之前，删除不必要的传参
      delete this.model.model_id;
      delete this.model.create_time;
      // 更改状态为有效设计稿
      this.model.status = '1';
      this.model.model_name = data.name;
      this.model.user_id = window.localStorage.getItem('user_id');
      console.log(this.model);
      this.factoryService.postModelData('api/factory', this.model,
        (res: any) => {
          if (res.code === 1) {
            loading.dismiss();
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
