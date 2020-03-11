import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.page.html',
  styleUrls: ['./input-modal.page.scss'],
})
export class InputModalPage implements OnInit {

  @Input() data: any;
  private title: string;
  private text: string;
  private v: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.title = this.data.title;
    this.text = this.data.text;
  }

  cancel() {
    this.modalCtrl.dismiss({ res: false });
  }

  confirm(v: HTMLInputElement) {
    if (v.value.length > 0) {
      this.modalCtrl.dismiss({ res: true, name: v.value });
    } else {
      this.modalCtrl.dismiss({ res: false });
    }
  }

}
