import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { BaseUI } from 'src/app/common/base-ui';
import { ModalController, ToastController } from '@ionic/angular';
import { DraftModalPage } from '../draft-modal/draft-modal.page';
import { SupplierModalPage } from '../../common/supplier-modal/supplier-modal.page';
import { TaskModalPage } from 'src/app/common/task-modal/task-modal.page';
import { Router } from '@angular/router';

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
    this.router.navigate(['task/detail', taskId]);
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

  release(id: string) {

  }

  delete(id: string) {

  }

  back() {
    this.router.navigate(['tabs/user']);
  }

  edit() {
    super.presentToast(this.toastCtrl, '此功能待开发');
  }

}
