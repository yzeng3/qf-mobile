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

  private id: number;
  private maps = [];

  constructor(private factory: Factory, private config: MyConfig, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.maps = Factory.mapFactory;
  }

  pickMap(id: number) {
    console.log(id);
    this.factory.mapId = id;
    this.id = id;
  }

  confirm() {

  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
