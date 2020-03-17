import { Component, OnInit, Input } from '@angular/core';
import { BaseUI } from '../base-ui';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { FactoryService } from 'src/app/services/factory/factory.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.page.html',
  styleUrls: ['./task-modal.page.scss'],
})
export class TaskModalPage extends BaseUI implements OnInit {

  @Input() data: any;
  private item = {};

  constructor(
    private loadingCtrl: LoadingController,
    private factoryService: FactoryService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {
    super();
   }

  ngOnInit() {
    this.initTask(this.data.taskId);
  }

  async initTask(taskId: string) {
    const load = await super.presentLoading(this.loadingCtrl, '加载数据...');
    this.factoryService.viewTask('api/task/id', { task_id: taskId },
      (res: any) => {
        load.dismiss();
        this.item = res;
      }, (err: any) => {
        load.dismiss();
        super.presentToast(this.toastCtrl, '加载数据失败,请重新尝试');
        this.back();
      });
  }


  back() {
    this.modalCtrl.dismiss();
  }

}
