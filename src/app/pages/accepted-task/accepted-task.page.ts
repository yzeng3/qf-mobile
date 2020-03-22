import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BaseUI } from 'src/app/common/base-ui';
import { SupplierModalPage } from 'src/app/common/supplier-modal/supplier-modal.page';
import { TaskModalPage } from 'src/app/common/task-modal/task-modal.page';
import { CancelPage } from 'src/app/common/cancel/cancel.page';

@Component({
  selector: 'app-accepted-task',
  templateUrl: './accepted-task.page.html',
  styleUrls: ['./accepted-task.page.scss'],
})
export class AcceptedTaskPage extends BaseUI implements OnInit {

  private feedbacks = [];

  constructor(
    private factoryService: FactoryService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {
    super();
   }

   ngOnInit() {
    this.initData();
  }

  initData() {
    const userId = window.localStorage.getItem('user_id');
    this.factoryService.getFeedback('api/feedback/query/valid', { user_id: userId },
      (res: any) => {
        this.feedbacks = res;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  viewTask(id: string) {
    super.presentModal(this.modalCtrl, TaskModalPage, { taskId: id }, true, 'task-common-modal');
  }

  viewSupplier(id: string) {
    super.presentModal(this.modalCtrl, SupplierModalPage, { supplierId: id }, true, 'supplier-common-modal');
  }

  detail(id: string) {
    super.presentModal(this.modalCtrl, TaskModalPage, { taskId: id }, true, 'task-common-modal');
  }

  /**
   * 放弃此项交易
   */
  async giveUp(id: string) {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '放弃提示', text: '您确认放弃此项交易吗?' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      const loading = await super.presentLoading(this.loadingCtrl, '正在撤销');
      this.factoryService.giveUp('api/feedback/cancel', { feedback_id: id },
        (res: any) => {
          loading.dismiss();
          super.presentToast(this.toastCtrl, res.msg, 1500, 'middle', 'success');
          this.ngOnInit();
        }, (err: any) => {
          super.presentToast(this.toastCtrl, '撤销失败');
        }
      );
    }
  }

  back() {
    this.router.navigate(['tabs/user']);
  }

  edit() {
    super.presentToast(this.toastCtrl, '此功能待开发');
  }

}
