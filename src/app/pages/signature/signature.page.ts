import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.page.html',
  styleUrls: ['./signature.page.scss'],
})
export class SignaturePage implements OnInit {

  private signature: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  confirm(signature: HTMLInputElement) {
    this.modalCtrl.dismiss({ signature: signature.value });
  }

}
