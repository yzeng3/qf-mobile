import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseUI } from 'src/app/common/base-ui';
import { ToastController, ModalController, LoadingController } from '@ionic/angular';
import { FactoryService } from 'src/app/services/factory/factory.service';

@Component({
  selector: 'app-store-model',
  templateUrl: './store-model.page.html',
  styleUrls: ['./store-model.page.scss'],
})
export class StoreModelPage extends BaseUI implements OnInit {

  private storeId: string;
  private models = [];

  constructor(
    activedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private factoryService: FactoryService
  ) {
    super();
    this.storeId = activedRoute.snapshot.params.storeId;
   }

  ngOnInit() {
    // this.getModels();
  }

  async getModels() {
    const load = await super.presentLoading(this.loadingCtrl, '加载数据');
    this.factoryService.getStoreModels('api/store/models', { supplier_id: this.storeId },
      async (res: any) => {
        load.dismiss();
        this.models = res;
        console.log(this.models);
      }, () => {
        load.dismiss();
        super.presentToast(this.toastCtrl, '加载数据失败,请检查网络');
      });
  }

}
