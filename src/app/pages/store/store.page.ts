import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { BaseUI } from 'src/app/common/base-ui';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage extends BaseUI implements OnInit {

  private sid: string; // 供应商ID
  private supplier: any; // 供应商

  constructor(
    activedRoute: ActivatedRoute,
    private router: Router,
    private factoryService: FactoryService,
    private toastCtrl: ToastController) {
    super();
    this.sid = activedRoute.snapshot.params.sid;
  }

  ngOnInit() {
    this.factoryService.getSupplier('api/supplier/query', { supplier_id: this.sid },
      (res: any) => {
        this.supplier = res;
      }, (err: any) => {
        console.log(err);
      });
  }

  viewModels() {
    const isDesign = this.supplier.is_design;
    if (isDesign === 1) {
      this.router.navigate(['store-model', this.sid]);
    } else {
      super.presentToast(this.toastCtrl, '本店铺未开放店铺设计');
    }
  }

}
