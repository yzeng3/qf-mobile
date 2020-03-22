import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { MyConfig } from 'src/app/data/config';
import { BaseUI } from 'src/app/common/base-ui';
import { CancelPage } from 'src/app/common/cancel/cancel.page';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage extends BaseUI implements OnInit {

  private taskId: string;
  private iScore = '78';
  private sizeId: string;
  private task = {};

  constructor(
    activedRoute: ActivatedRoute,
    private factoryService: FactoryService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private config: MyConfig,
    private router: Router,
    private modalCtrl: ModalController
  ) {
    super();
    this.taskId = activedRoute.snapshot.params.taskId;
  }

  ngOnInit() {
    this.initTask(this.taskId);
  }

  async initTask(taskId: string) {
    const load = await super.presentLoading(this.loadingCtrl, '加载数据...');
    this.factoryService.viewTask('api/task/id', { task_id: taskId },
      (res: any) => {
        load.dismiss();
        console.log(res);
        this.task = res;
        this.sizeId = res.size_id;
      }, (err: any) => {
        load.dismiss();
        super.presentToast(this.toastCtrl, '加载数据失败,请重新尝试');
        this.back();
      });
  }

  async commit(amount: HTMLInputElement, deli: HTMLInputElement, sup: HTMLInputElement) {
    if (amount.value.length === 0 && deli.value.length === 0) {
      super.presentToast(this.toastCtrl, '金额和时间是必填项');
    } else {
      const data = {
        task_id: this.taskId,
        size_id: this.sizeId,
        expect_amount: amount.value,
        delivery: deli.value,
        score: this.iScore,
        supplement: sup.value,
      }
      const loading = await super.presentLoading(this.loadingCtrl, '正在保存...');
      this.factoryService.updataTask('api/task/update', data,
        (res: any) => {
          loading.dismiss();
          super.presentToast(this.toastCtrl, res.msg, 1500, 'middle', 'success');
          this.router.navigate(['tabs/overdue-task']);
        }, (err: any) => {
          loading.dismiss();
          super.presentToast(this.toastCtrl, '保存数据失败,请重新尝试');
        });
    }
  }

  async back() {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '退出提示', text: '您是否确认退出, 退出之后, 您的修改将不会生效!' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      this.router.navigate(['tabs/overdue-task']);
    }
  }

}
