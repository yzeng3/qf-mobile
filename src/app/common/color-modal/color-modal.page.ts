import { Component, OnInit, Input } from '@angular/core';
import { ToastController, LoadingController, ModalController } from '@ionic/angular';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { BaseUI } from '../base-ui';

@Component({
  selector: 'app-color-modal',
  templateUrl: './color-modal.page.html',
  styleUrls: ['./color-modal.page.scss'],
})
export class ColorModalPage extends BaseUI implements OnInit {

  @Input() data: any;
  private colors = [];
  private color = '';
  private colorId = '';

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private factoryService: FactoryService,
    private toastCtrl: ToastController
  ) {
    super();
   }

  ngOnInit() {
    this.initColors();
  }

  async initColors() {
    const load = await super.presentLoading(this.loadingCtrl, '加载数据');
    this.factoryService.getStoreModels('api/id/pictures', { pictures: this.data },
      async (res: any) => {
        load.dismiss();
        this.colors = res;
        this.colorId = res[0].picture_id;
      }, () => {
        load.dismiss();
        super.presentToast(this.toastCtrl, '加载数据失败,请检查网络');
      });
  }

  pickColor(id: string, url: string) {
    document.getElementById(this.colorId).hidden = true; // 之前的勾隐藏掉
    this.colorId = id;
    document.getElementById(id).hidden = false; // 选中的显示勾
    this.color = url;
  }

  confirm() {
    this.modalCtrl.dismiss({ res: this.color });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
