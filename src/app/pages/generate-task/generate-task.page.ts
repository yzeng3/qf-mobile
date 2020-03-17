import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseUI } from 'src/app/common/base-ui';
import { ToastController, ModalController, LoadingController } from '@ionic/angular';
import { CancelPage } from 'src/app/common/cancel/cancel.page';
import { DraftModalPage } from '../draft-modal/draft-modal.page';
import { FactoryService } from 'src/app/services/factory/factory.service';

@Component({
  selector: 'app-generate-task',
  templateUrl: './generate-task.page.html',
  styleUrls: ['./generate-task.page.scss'],
})
export class GenerateTaskPage extends BaseUI implements OnInit {

  private userName: string;
  private userId: string;
  private modelId: string;
  private supplierId: string;
  private supplierName: string;
  private sizeId: string;
  private expectAccount: string;
  private delivery: string;
  private score: string;

  constructor(
    activedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private factoryService: FactoryService
  ) {
    super();
    this.modelId = activedRoute.snapshot.params.modelId;
    this.supplierId = activedRoute.snapshot.params.belong;
  }

  ngOnInit() {
    this.userName = window.localStorage.getItem('user_id');
    this.userId = window.localStorage.getItem('user_id');

  }

  info(id: string) {
    super.presentModal(this.modalCtrl, DraftModalPage, { modelId: id }, true, 'draft-modal');
  }

  viewUserInfo() {
    super.presentToast(this.toastCtrl, '此功能待开发');
  }

  changeSize() {
    super.presentToast(this.toastCtrl, '此功能待开发');
  }

  commit(expectAmount: any, delivery: any, supplement: any) {
    if (expectAmount.value.length > 0) {
      if (delivery.value.length > 0) {
        const data = {
          user_id: this.userId,
          model_id: this.modelId,
          supplier_id: this.supplierId,
          size_id: '11',
          expect_amount: expectAmount.value,
          delivery: delivery.value,
          score: '95',
          supplement: supplement.value,
          status: '1'
        };
        this.factoryService.saveTaskData('api/task/save', data,
        (res: any) => {
          super.presentToast(this.toastCtrl, res.msg, 1500, 'top', 'primary');
          this.router.navigate(['tabs/overdue-task']);
        }, (err: any) => {
          super.presentToast(this.toastCtrl, '任务单生成失败,请检查网络');
        });
      } else {
        super.presentToast(this.toastCtrl, '定制时间不能为空', 1500, 'middle');
      }
    } else {
      super.presentToast(this.toastCtrl, '悬赏金额不能为空', 1500, 'middle');
    }
  }

  async back() {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '退出提示', text: '您是否确认退出, 退出之后, 您的修改将不会生效!' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      this.router.navigate(['tabs/draft']);
    }
  }

}
