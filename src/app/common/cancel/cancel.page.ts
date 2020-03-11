import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.page.html',
  styleUrls: ['./cancel.page.scss'],
})
export class CancelPage implements OnInit {

  @Input() data: any;
  private title: string;
  private text: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.title = this.data.title;
    this.text = this.data.text; // 初始化数据
  }

  cancel() {
    this.modalCtrl.dismiss({ res: false });
  }

  confirm() {
    this.modalCtrl.dismiss({ res: true });
  }

}
