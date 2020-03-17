import { Component, OnInit } from '@angular/core';
import { BaseUI } from 'src/app/common/base-ui';
import { ToastController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { MyConfig } from 'src/app/data/config';
import { DraftModalPage } from '../draft-modal/draft-modal.page';
import { CancelPage } from 'src/app/common/cancel/cancel.page';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.page.html',
  styleUrls: ['./draft.page.scss'],
})
export class DraftPage extends BaseUI implements OnInit {

  private models = []; // 从服务器得到的设计稿数据


  constructor(
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
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

  info(id: string) {
    super.presentModal(this.modalCtrl, DraftModalPage, { modelId: id }, true, 'draft-modal');
  }

  generateTask(belong: string, modelId: string) {
    this.router.navigate(['generate-task', belong, modelId]);
  }

  async delete(modelId: string) {
    const modal = await super.presentModal(this.modalCtrl, CancelPage,
      { title: '退出提示', text: '您确认删除该设计稿吗, 删除之后请至过期设计稿查看' }, false, 'cancel-modal');
    const { data } = await modal.onDidDismiss();
    if (data.res) {
      this.factoryService.getModelData('api/model/delete', { model_id: modelId },
        (res: any) => {
          super.presentToast(this.toastCtrl, res.msg, 1800, 'top', 'primary');
          this.ngOnInit();
        }, (err: any) => {
          console.log(err);
        }
      );
    }
  }

}
