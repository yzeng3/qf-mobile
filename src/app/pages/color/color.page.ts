import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Factory } from 'src/app/data/factory';

@Component({
  selector: 'app-color',
  templateUrl: './color.page.html',
  styleUrls: ['./color.page.scss'],
})
export class ColorPage implements OnInit, AfterViewInit {

  @Input() data: []; // 接收传过来的列表, 也可以用 NavParams 接收（官网 modal ）

  constructor(private popoverCtrl: PopoverController, private factory: Factory) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    document.getElementById(this.factory.colorId).hidden = false;
  }

  pickColor(id: string) {
    this.factory.colorId = id;
    document.getElementById(id).hidden = false; // 选中的显示勾
    // 关闭弹框, id传回去
    this.popoverCtrl.dismiss({
      _id: id
    });
  }
}
