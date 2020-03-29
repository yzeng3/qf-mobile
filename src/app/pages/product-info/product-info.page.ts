import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { ModalController, ToastController, LoadingController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseUI } from 'src/app/common/base-ui';
import { MyConfig } from 'src/app/data/config';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage extends BaseUI implements OnInit {

  private product = {};
  private pictures = [];
  private pid: string;

  constructor(
    activedRoute: ActivatedRoute,
    private factoryService: FactoryService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private actionSheetController: ActionSheetController,
    private router: Router,
    private config: MyConfig
  ) {
    super();
    this.pid = activedRoute.snapshot.params.pid;  // 接收design页面的typeId
  }

  ngOnInit() {
    this.initPage();
    this.initPictures();
  }

  initPage() {
    this.factoryService.productGet('api/product/detail', { product_id: this.pid },
      (res: any) => {
        this.product = res;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  initPictures() {
    this.factoryService.productGet('api/product/picture', { product_id: this.pid },
      (res: any) => {
        this.pictures = res;
      }, (err: any) => {
        super.presentToast(this.toastCtrl, '请检查网络');
      }
    );
  }

  addToCart() {
    super.presentToast(this.toastCtrl, '此功能待开发');
  }

  buyNow() {
    super.presentToast(this.toastCtrl, '此功能待开发');
  }

  async share() {
    const content = [{
      text: 'QQ',
      icon: 'share',
      handler: () => {
        console.log('QQ');
      }
    }, {
      text: '微信',
      icon: 'share',
      handler: () => {
        console.log('微信');
      }
    }, {
      text: '取消',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }];
    const actionSheet = await super.presentActionSheet(this.actionSheetController, '分享', content, true, '');
  }

}
