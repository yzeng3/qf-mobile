import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  public leftCategory = []; // 左侧分类数据
  public rightCategory = []; // 右侧分类数据
  public base_url = 'http://jd.itying.com/';

  constructor(
    public navCtrl: NavController,
    public category: CategoryService
  ) { }

  ngOnInit() {
    // 左侧分类数据
    this.getLeftData();
  }

  // 左侧分类的数据
  getLeftData() {
    this.category.requestLeftData(
      (res: any) => {
        this.leftCategory = res;
        // 调用右侧分类
        this.getRightData(res[0]._id);
      }
    );
  }

  // 左侧分类的数据
  getRightData(pid: string) {
    this.category.requestRightData('http://jd.itying.com/api/pcate?pid=' + pid,
      (res: any) => {
        this.rightCategory = res;
      }
    );
  }

  // 跳转商品列表页面
  pushProductPage(value) {
  }

}
