import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  private sid: string; // 供应商ID

  constructor( activedRoute: ActivatedRoute) {
    this.sid = activedRoute.snapshot.params.sid;
   }

  ngOnInit() {
    console.log(this.sid);
  }



}
