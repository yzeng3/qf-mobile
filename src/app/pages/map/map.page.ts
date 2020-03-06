import { Component, OnInit } from '@angular/core';
import { Factory } from 'src/app/data/factory';
import { MyConfig } from 'src/app/data/config';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  private mapId = '0';
  private maps = [];

  constructor(private factory: Factory, private config: MyConfig, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.maps = Factory.mapFactory;
  }

  pickMap(id: string) {
    document.getElementById(this.mapId).style.border = ''; // 去掉上一个标记
    document.getElementById(id).style.border = '0.2em solid #f9c405';
    this.mapId = id;
  }

  confirm() {
    // this.factory.mapId = this.id;
    this.modalCtrl.dismiss({ _id: this.mapId });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
