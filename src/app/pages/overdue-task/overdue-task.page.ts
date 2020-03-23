import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { BaseUI } from 'src/app/common/base-ui';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { DraftModalPage } from '../draft-modal/draft-modal.page';
import { SupplierModalPage } from '../../common/supplier-modal/supplier-modal.page';
import { TaskModalPage } from 'src/app/common/task-modal/task-modal.page';
import { Router } from '@angular/router';
import { CancelPage } from 'src/app/common/cancel/cancel.page';

@Component({
  selector: 'app-overdue-task',
  templateUrl: './overdue-task.page.html',
  styleUrls: ['./overdue-task.page.scss'],
})
export class OverdueTaskPage extends BaseUI implements OnInit {

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
    this.factoryService.getTasks('api/task/query', { user_id: userId },
      (res: any) => {
        this.tasks = res;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  change(taskId: string) {
    this.router.navigate(['task-detail', taskId]);
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

  async release(id: string) {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '发布提示', text: '您确认发布此任务单吗?' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      const loading = await super.presentLoading(this.loadingCtrl, '正在发布');
      this.factoryService.updataTask('api/task/release', { task_id: id },
        (res: any) => {
          loading.dismiss();
          super.presentToast(this.toastCtrl, res.msg, 1500, 'middle', 'success');
          this.ngOnInit();
        }, (err: any) => {
          super.presentToast(this.toastCtrl, '发布失败');
        }
      );
    }
  }

  async delete(id: string) {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '退出提示', text: '您确认删除吗?' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      const loading = await super.presentLoading(this.loadingCtrl, '正在删除');
      this.factoryService.updataTask('api/task/delete', { task_id: id },
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
