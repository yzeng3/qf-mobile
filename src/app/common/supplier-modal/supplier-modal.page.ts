import { Component, OnInit, Input } from '@angular/core';
import { BaseUI } from 'src/app/common/base-ui';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { FactoryService } from 'src/app/services/factory/factory.service';

@Component({
  selector: 'app-supplier-modal',
  templateUrl: './supplier-modal.page.html',
  styleUrls: ['./supplier-modal.page.scss'],
})
export class SupplierModalPage extends BaseUI implements OnInit {

  @Input() data: any;
  private supplierId: string;
  private supplier = {};

  constructor(
    private loadingCtrl: LoadingController,
    private factoryService: FactoryService,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController
  ) {
    super();
  }

  ngOnInit() {
    this.supplierId = this.data.supplierId;
    this.initModel();
  }

  async initModel() {
    const load = await super.presentLoading(this.loadingCtrl, '加载数据...');
    this.factoryService.getSupplier('api/supplier/query', { supplier_id: this.supplierId },
      (res: any) => {
        load.dismiss();
        this.supplier = res;
      }, (err: any) => {
        console.log(err);
        load.dismiss();
        super.presentToast(this.toastCtrl, '加载数据失败,请重新尝试');
        this.back();
      });
  }


  back() {
    this.modalCtrl.dismiss();
  }

}
