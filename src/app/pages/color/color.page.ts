import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Factory } from 'src/app/data/factory';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit, AfterViewInit {

  @Input() data: []; // 接收传过来的列表, 也可以用 NavParams 接收（官网 modal ）

  private colorId: string;

  constructor(private modalCtrl: ModalController, private factory: Factory) { }

  ngOnInit() {
    this.colorId = this.factory.colorId;
  }

  ngAfterViewInit(): void {
    document.getElementById(this.factory.colorId).hidden = false;
  }

  pickColor(id: string) {
    document.getElementById(this.colorId).hidden = true; // 之前的勾隐藏掉
    this.colorId = id;
    document.getElementById(id).hidden = false; // 选中的显示勾
  }

  confirm() {
    this.factory.colorId = this.colorId;
    this.modalCtrl.dismiss({ _id: this.colorId });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
