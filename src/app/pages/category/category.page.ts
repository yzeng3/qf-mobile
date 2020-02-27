import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoryService } from 'src/app/services/category/category.service';
import { Config } from 'src/app/data/config';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  public categoryList = []; // 左侧分类数据
  public categoryData = []; // 右侧分类数据
  public titles = [['热门店铺', '特卖', '热门设计'], ['上装', '下装', '裙子', '特色装'], ['上装', '下装'], ['鞋', '包'], ['全部']];
  public subtitle = this.titles[4];
  public subtitleLenth = 1;

  constructor(
    private navCtrl: NavController,
    private category: CategoryService,
    private config: Config
  ) { }

  ngOnInit() {
    // 左侧分类数据
    this.getCategoryList();
  }

  // 切换右侧小标题
  switchSubtitle(productId: any) {
    if (productId === 11) {           // 推荐分类, 载入第一种小标题
      this.subtitle = this.titles[0];
    } else if (productId === 13) {    // 女装分类
      this.subtitle = this.titles[1];
    } else if (productId === 16) {    // 鞋包分类
      this.subtitle = this.titles[3];
    } else if (productId === 18) {    // 饰品分类
      this.subtitle = this.titles[4];
    } else {
      this.subtitle = this.titles[2];
    }
  }

  // 左侧分类的数据
  getCategoryList() {
    this.category.requestCategoryList('api/getCategoryList',
      (res: any) => {
        this.categoryList = res;
        this.getCategoryData(res[2].product_id); // 右侧数据
      }
    );
  }

  // 左侧分类的数据
  getCategoryData(productId: any) {
    this.category.requestCategoryData('api/getCategoryData?productId=' + productId,
      (res: any) => {
        this.categoryData = res;
        this.switchSubtitle(productId);
      }
    );
  }

  // 跳转商品列表页面
  pushProductPage(value: any) {
  }
}
