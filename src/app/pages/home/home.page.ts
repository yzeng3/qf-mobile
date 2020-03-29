import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { MyConfig } from 'src/app/data/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private products = [];

  constructor(private factoryService: FactoryService, private config: MyConfig, private router: Router) { }

  ngOnInit() {
    this.getRecommendProds();
  }

  // 切换segment
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  getRecommendProds() {
    this.factoryService.searchProduct('api/product/search', { name: '男士休闲外套' },
      (res: any) => {
        this.products = res;

      }, (err: any) => {
        console.log(err);
      }
    );
  }

  viewProduct(id: string){
    this.router.navigate(['product-info', id]);
  }
}
