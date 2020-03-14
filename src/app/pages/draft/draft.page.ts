import { Component, OnInit } from '@angular/core';
import { BaseUI } from 'src/app/common/base-ui';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { MyConfig } from 'src/app/data/config';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.page.html',
  styleUrls: ['./draft.page.scss'],
})
export class DraftPage extends BaseUI implements OnInit {

  private models = []; // 从服务器得到的设计稿数据


  constructor(
    private toastCtrl: ToastController,
    private router: Router,
    private factoryService: FactoryService,
    private config: MyConfig) {
    super();
  }

  ngOnInit() {
    this.getModels();
  }

  getModels() {
    const userId = window.localStorage.getItem('user_id');
    this.factoryService.getModelData('api/models', { user_id: userId },
      (res: any) => {
        this.models = res;
      }, (err: any) => {
        console.log(err);
      }
    );
  }

  back() {
    this.router.navigate(['tabs/user']);
  }

  edit() {
    super.presentToast(this.toastCtrl, '此功能待开发');
  }

  detail(modelId: string) {
    this.router.navigate(['detail', modelId]);
  }

}
