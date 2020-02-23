import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // 进去搜索页面
  toSearch() {
    console.log('search for it.');
  }

  // 切换segment
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
