import { Component, OnInit, ɵɵgetInheritedFactory } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from 'src/app/data/config';
import { Factory } from 'src/app/data/factory';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.page.html',
  styleUrls: ['./factory.page.scss'],
})
export class FactoryPage implements OnInit {

  private typeId: string;     // 模型分类
  private modelNo: string;    // 模型编号
  private modelName: string;  // 模型名称
  private factory = [];

  /* 模型参数 */
  private picture = 0; // 正面与背面的图片

  constructor(
    activedRoute: ActivatedRoute,
    private config: Config,
    private router: Router) {
    this.typeId = activedRoute.snapshot.params.typeId;
    this.modelNo = activedRoute.snapshot.params.modelNo;
    this.modelName = activedRoute.snapshot.params.modelName;
  }

  ngOnInit() {
    console.log(this.typeId, this.modelNo, this.modelName);
    const num = Number(this.modelNo);
    this.initFactory(this.typeId, num - 1);
    console.log(this.factory);
  }

  // 初始化工厂数据
  initFactory(typeId: string, num: number) {
    if (typeId === '1') {
      this.factory = Factory.hotFactory[num].factory;
    } else if (typeId === '2') {
      this.factory = Factory.manFactory[num].factory;
    } else if (typeId === '3') {
      this.factory = Factory.womanFactory[num].factory;
    } else if (typeId === '4') {
      this.factory = Factory.childFactory[num].factory;
    } else {
      this.factory = Factory.antiqueFactory[num].factory;
    }
  }
}
