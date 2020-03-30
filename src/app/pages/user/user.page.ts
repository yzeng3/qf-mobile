import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { MyConfig } from 'src/app/data/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  private nickname = '设置昵称*';
  private products = [];

  private logisticsInfo = {
    src: this.config.apiUrl + 'public/clothes/woman/bottom/nz_niuzaiku.jpg',
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

  constructor(private factoryService: FactoryService, private config: MyConfig, private router: Router) { }

  ngOnInit() {
    this.getRecommendProds();
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

  viewProduct(id: string) {
    this.router.navigate(['product-info', id]);
  }

}
