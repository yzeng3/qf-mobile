import { Component, OnInit, Input } from '@angular/core';
import { BaseUI } from '../base-ui';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { MyConfig } from 'src/app/data/config';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.page.html',
  styleUrls: ['./map-modal.page.scss'],
})
export class MapModalPage extends BaseUI implements OnInit {

  @Input() data: any;
  private maps = [];
  private map: string;
  private mapId: string;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private factoryService: FactoryService,
    private toastCtrl: ToastController,
    private config: MyConfig) {
    super();
  }

  ngOnInit() {
    this.initMaps();
  }

  async initMaps() {
    const load = await super.presentLoading(this.loadingCtrl, '加载数据');
    this.factoryService.getStoreModels('api/id/pictures', { pictures: this.data },
      async (res: any) => {
        load.dismiss();
        this.maps = res;
        this.mapId = res[0].picture_id;
      }, () => {
        load.dismiss();
        super.presentToast(this.toastCtrl, '加载数据失败,请检查网络');
      });
  }

  pickMap(id: string, url: string) {
    document.getElementById(this.mapId).style.border = ''; // 去掉上一个标记
    document.getElementById(id).style.border = '0.2em solid #f9c405';
    this.mapId = id;
    this.map = url;
  }

  confirm() {
    this.modalCtrl.dismiss({res: this.map});
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
