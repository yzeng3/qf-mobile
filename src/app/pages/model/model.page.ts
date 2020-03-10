import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/data/menu';
import { MyConfig } from 'src/app/data/config';
import { BaseUI } from 'src/app/common/base-ui';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
})
export class ModelPage extends BaseUI implements OnInit {

  private typeId = '1'; // 默认为热门模块的模型
  private typeName = '热门';
  private models = [];

  constructor(
    activedRoute: ActivatedRoute,
    private config: MyConfig,
    private router: Router,
    private loadingCtrl: LoadingController) {
    super();
    this.typeId = activedRoute.snapshot.params.typeId;  // 接收design页面的typeId
    this.typeName = activedRoute.snapshot.params.typeName; // 接收typeName
    this.models = Menu.models; // 初始化模型数据
  }

  ngOnInit() {
  }

  // 进入设计工厂
  async goFactory(index: string, modelName: string) {
    const loading = await super.presentLoading(this.loadingCtrl, '正在初始化...', 2000);
    this.router.navigate(['factory', this.typeId, index, modelName]);
    loading.dismiss();
  }
}
