import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  private nickname = '设置昵称*';

  private logisticsInfo = {
    src: 'https://img.alicdn.com/imgextra/i2/1669409267/O1CN013eisdd2IKKvW1znKu_!!1669409267.jpg_430x430q90.jpg',
    status: '运输中',
    curStation: '宜宾邮件处理中心',
    nextStation: '宜宾李庄'
  };

  private attention = {
    productNum: '13',
    supplierNum: '20',
    designNum: '3',
    browse: '50'
  };

  constructor() { }

  ngOnInit() {
  }

}
