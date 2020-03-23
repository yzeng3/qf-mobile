import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BaseUI } from 'src/app/common/base-ui';
import { TaskModalPage } from 'src/app/common/task-modal/task-modal.page';
import { SupplierModalPage } from 'src/app/common/supplier-modal/supplier-modal.page';
import { CancelPage } from 'src/app/common/cancel/cancel.page';

@Component({
  selector: 'app-expired-task',
  templateUrl: './expired-task.page.html',
  styleUrls: ['./expired-task.page.scss'],
})
export class ExpiredTaskPage extends BaseUI implements OnInit {

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
    this.factoryService.getFeedback('api/feedback/query/cancel', { user_id: userId },
      (res: any) => {
        console.log(res);
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

  again(id: string) {
    super.presentToast(this.toastCtrl, '此功能待开发');
  }

  async delete(id: string) {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '删除提示', text: '您确认删除吗?' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      const loading = await super.presentLoading(this.loadingCtrl, '正在删除');
      this.factoryService.updateFeedback('api/feedback/delete', { feedback_id: id },
        (res: any) => {
          loading.dismiss();
          super.presentToast(this.toastCtrl, res.msg, 1500, 'middle', 'success');
          this.ngOnInit();
        }, (err: any) => {
          super.presentToast(this.toastCtrl, '删除失败');
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
