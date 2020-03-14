import { Component, OnInit, Input } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/base-ui';

@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.page.html',
  styleUrls: ['./model-detail.page.scss'],
})
export class ModelDetailPage extends BaseUI implements OnInit {

  private modelId: string; // 模型ID
  private model = [];
  private tem: any;
  private status = 1;
  private size = '';
  private shellFabric = '';
  private sleeveLeftColor = '';
  private sleeveRightColor = '';
  private signature = '';
  private printFront = null;  // 印花正面
  private printBack = null;   // 印花背面
  private imgF = null; // 正面图片
  private imgB = null; // 背面图片

  customOptions: any = {
    cssClass: 'more-select'
  };

  constructor(
    activedRoute: ActivatedRoute,
    private factoryService: FactoryService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    super();
    this.modelId = activedRoute.snapshot.params.modelId;
  }

  ngOnInit() {
    this.initModel();
  }

  async initModel() {
    const load = await super.presentLoading(this.loadingCtrl, '加载数据...');
    this.factoryService.getModelById('api/model', { model_id: this.modelId },
      (res: any) => {
        console.log(res);
        this.tem = res;
        this.handleData();
      }, (err: any) => {
        super.presentToast(this.toastCtrl, '加载数据失败,请重新尝试');
        this.back();
      });
    load.dismiss();
  }

  handleData() {
    for (const i in this.tem) { // 取出不为null的所有值存入model
      if (i !== 'image_back' && i !== 'image_front' &&
        i !== 'img_f' && i !== 'img_b' && i !== 'user_id' &&
        i !== 'printing_front' && i !== 'printing_back') {
        if (i === 'status') {
          if (this.tem[i] === 1) {
            this.model.push({ key: '状态', value: '有效' });
          } else {
            this.model.push({ key: '状态', value: '无效' });
            this.status = 0; // 无效设计稿
          }
        } else if (i === 'size') {
          this.size = this.tem[i];
        } else if (i === 'shell_fabric') {
          this.shellFabric = this.tem[i];
        } else if (i === 'sleeve_left_color') {
          this.sleeveLeftColor = this.tem[i];
        } else if (i === 'sleeve_right_color') {
          this.sleeveRightColor = this.tem[i];
        } else if (i === 'signature') {
          this.signature = this.tem[i];
        } else {
          if (i === 'model_id') {
            this.model.push({ key: '设计稿编号', value: this.tem[i] + '' });
          } else if (i === 'model_name') {
            this.model.push({ key: '设计稿名称', value: this.tem[i] + '' });
          } else if (i === 'belong') {
            this.model.push({ key: '属于', value: this.tem[i] + '' });
          } else if (i === 'score') {
            this.model.push({ key: '评分', value: this.tem[i] + '' });
          } else if (i === 'category') {
            this.model.push({ key: '类别', value: this.tem[i] + '' });
          } else if (i === 'main_style' && this.tem[i] !== null) {
            this.model.push({ key: '主题风格', value: this.tem[i] + '' });
          } else if (i === 'time_to_market' && this.tem[i] !== null) {
            this.model.push({ key: '上市时间', value: this.tem[i] + '' });
          } else if (i === 'washing' && this.tem[i] !== null) {
            this.model.push({ key: '洗水工艺', value: this.tem[i] + '' });
          } else if (i === 'material' && this.tem[i] !== null) {
            this.model.push({ key: '材质', value: this.tem[i] + '' });
          } else if (i === 'thickness' && this.tem[i] !== null) {
            this.model.push({ key: '厚薄', value: this.tem[i] + '' });
          } else if (i === 'pocket' && this.tem[i] !== null) {
            this.model.push({ key: '口袋样式', value: this.tem[i] + '' });
          } else if (i === 'color' && this.tem[i] !== null) {
            this.model.push({ key: '颜色', value: this.tem[i] + '' });
          } else if (i === 'filler' && this.tem[i] !== null) {
            this.model.push({ key: '填充物', value: this.tem[i] + '' });
          } else if (i === 'hem_style' && this.tem[i] !== null) {
            this.model.push({ key: '下摆设计', value: this.tem[i] + '' });
          } else if (i === 'sleeve' && this.tem[i] !== null) {
            this.model.push({ key: '袖长', value: this.tem[i] + '' });
          } else if (i === 'outside_length' && this.tem[i] !== null) {
            this.model.push({ key: '裤长', value: this.tem[i] + '' });
          } else if (i === 'waist_style' && this.tem[i] !== null) {
            this.model.push({ key: '腰型', value: this.tem[i] + '' });
          } else if (i === 'create_time' && this.tem[i] !== null) {
            this.model.push({ key: '创建时间', value: this.tem[i] + '' });
          }
        }
      }
    }
  }

  getSelectValue(event: any) {
    const value = event.target.value;
    const id = event.target.id;
    if (id === 'shellFabric') {
      this.shellFabric = value;
    } else if (id === 'sleeveLeftColor') {
      this.sleeveLeftColor = value;
    } else if (id === 'sleeveRightColor') {
      this.sleeveRightColor = value;
    }
  }

  commit() {

  }

  back() {

  }
}
