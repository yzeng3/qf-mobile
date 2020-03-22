import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BaseUI } from 'src/app/common/base-ui';
import { DraftModalPage } from '../draft-modal/draft-modal.page';
import { SupplierModalPage } from 'src/app/common/supplier-modal/supplier-modal.page';
import { TaskModalPage } from 'src/app/common/task-modal/task-modal.page';
import { CancelPage } from 'src/app/common/cancel/cancel.page';

@Component({
  selector: 'app-released-task',
  templateUrl: './released-task.page.html',
  styleUrls: ['./released-task.page.scss'],
})
export class ReleasedTaskPage extends BaseUI implements OnInit {

  private tasks = [];

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
    this.factoryService.getTasks('api/released/task/query', { user_id: userId },
      (res: any) => {
        this.tasks = res;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  viewModel(id: string) {
    super.presentModal(this.modalCtrl, DraftModalPage, { modelId: id }, true, 'draft-modal');
  }

  viewSupplier(id: string) {
    super.presentModal(this.modalCtrl, SupplierModalPage, { supplierId: id }, true, 'supplier-common-modal');
  }

  detail(id: string) {
    super.presentModal(this.modalCtrl, TaskModalPage, { taskId: id }, true, 'task-common-modal');
  }

  /**
   * 撤回任务单
   */
  async withdraw(id: string) {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '撤回提示', text: '您确认撤回此任务单吗?' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      const loading = await super.presentLoading(this.loadingCtrl, '正在撤回');
      this.factoryService.withdrawTask('api/released/task/cancel', { task_id: id },
        (res: any) => {
          loading.dismiss();
          super.presentToast(this.toastCtrl, res.msg, 1500, 'middle', 'success');
          this.ngOnInit();
        }, (err: any) => {
          super.presentToast(this.toastCtrl, '撤回失败');
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
