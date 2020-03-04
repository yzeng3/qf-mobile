import { Component, OnInit, ɵɵgetInheritedFactory } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/data/config';
import { Factory } from 'src/app/data/factory';
import { ModalController, PopoverController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/base-ui';
import { ColorPage } from '../color/color.page';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.page.html',
  styleUrls: ['./factory.page.scss'],
})
export class FactoryPage extends BaseUI implements OnInit {

  private typeId: string;     // 模型分类
  private modelNo: string;    // 模型编号
  private modelName: string;  // 模型名称
  private imgUrl: string;     // 模型图片地址
  private factory = [];       // 模型数据

  /* 模型参数 */
  private picture = 0; // 正面与背面的图片


  constructor(
    activedRoute: ActivatedRoute,
    private config: Config,
    private router: Router,
    public modalCtrl: ModalController,
    private popoverCtrl: PopoverController) {
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

  // 切换模型正背面
  modelChanged(ev: any) {
    const value = ev.detail.value;
    if (value === 'front') { // 点击正面按钮
      this.imgUrl = this.factory[this.picture].front;
    } else {
      this.imgUrl = this.factory[this.picture].back;
    }
  }

  // 颜色选择
  async setColor() {
    const popover = await super.presentPopover(this.popoverCtrl, ColorPage, this.factory, true, 'color-popover');
    const { data } = await popover.onWillDismiss();
    // 切换图片，达到换色效果
    if (data !== undefined) {
      this.picture = Number(data._id);
      this.imgUrl = this.factory[this.picture].front;
    }
  }

  // 贴图
  setMap() {
    console.log('set');
  }

  // 签名
  sign() {
    console.log('sign');
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
