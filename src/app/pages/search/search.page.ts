import { Component, OnInit } from '@angular/core';
import { FactoryService } from 'src/app/services/factory/factory.service';
import { MyConfig } from 'src/app/data/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  private content: string;
  private products = [];

  constructor(
    private factoryService: FactoryService,
    private config: MyConfig,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * 实时监控input框，提示信息
   *
   */
  getInputValue(ev: any) {
    this.content = ev.target.value;
  }

  search() {
    this.factoryService.searchProduct('api/product/search', { name: this.content },
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
