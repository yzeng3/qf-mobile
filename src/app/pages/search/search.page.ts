import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * 实时监控input框，提示信息
   *
   */
  getInputValue(ev: any) {
    console.log(ev.target.value);
  }

}
