import { Component, OnInit, Input } from '@angular/core';
import { Factory } from 'src/app/data/factory';
import { ModalController } from '@ionic/angular';
import { Clone } from 'src/app/services/util/clone';

@Component({
  selector: 'app-more-design',
  templateUrl: './more-design.page.html',
  styleUrls: ['./more-design.page.scss'],
})
export class MoreDesignPage implements OnInit {

  constructor(private modalCtrl: ModalController, private factory: Factory) {
    this.parameters = this.factory.moreDesign;
  }

  @Input() data: any;

  private modelName: string;
  private fixed: any;         // 固定属性
  private optional = [];      // 可选择的
  private parameters = [];    // 选择结果

  // select框配置，参考 base-ui
  customOptions: any = {
    cssClass: 'more-select'
  };

  ngOnInit() {
    this.modelName = this.data.modelName;
    if (this.parameters.length === 0) { // 如果是第一个进入参数页面
      this.initData(this.data.typeId); // 初始化数据
    } else {
      const data = this.parameters.slice(0); // 强复制一份
      this.optional = data;
      this.fixed = this.optional.shift(); // 删除第一个元素
    }
  }

  // 根据类型编号获取相应数据
  initData(typeId: string) {
    if (typeId === '1') {

    } else if (typeId === '2') {
      const tem = Factory.manModelMoreDesign[Number(this.data.index)].more; // 强复制一份数据
      const temClone = Clone.deepClone(tem);
      this.initMore(temClone);
    } else if (typeId === '3') {

    } else if (typeId === '4') {

    } else {

    }
  }

  initMore(data: any) {
    this.parameters = data.slice(0); // 对于基本数据类型，slice等于深拷贝
    this.optional = data;
    this.fixed = this.optional.shift(); // 删除第一个元素
  }

  getSelectValue(event: any) {
    const value = event.target.value;
    const id = event.target.id;
    this.parameters[Number(id)].option = value; // 更改选项
  }

  confirm() {
    this.factory.moreDesign = this.parameters;
    this.modalCtrl.dismiss();
  }

}
