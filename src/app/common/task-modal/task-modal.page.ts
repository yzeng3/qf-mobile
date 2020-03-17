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
  private task: {};

  constructor(
    private loadingCtrl: LoadingController,
    private factoryService: FactoryService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {
    super();
   }

  ngOnInit() {
  }

}
