import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Config } from 'src/app/data/config';
import { Menu } from 'src/app/data/menu';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit, AfterViewInit {

  constructor(
    private config: Config,
  ) {
    this.categoryData = Menu.categoryData; // 初始化数据
  }

  public categoryList = []; // 左侧分类数据
  public categoryData = []; // 右侧分类数据
  public curTitle = '30';
  public titleElement: any;

  ngOnInit() {
  }

  // 初始化左侧导航条, 当前title为 白底 黑字 放大
  ngAfterViewInit(): void {
    document.getElementById(this.curTitle).style.background = '#ffffff';
    document.getElementById(this.curTitle).style.color = '#000000';
    document.getElementById(this.curTitle).style.fontSize = '1rem';
    document.getElementById(this.curTitle).style.lineHeight = '3.2';
  }
  // 右侧数据变化
  getData(id: string) {
    document.getElementById(this.curTitle).style.background = '#e5e6e8';
    document.getElementById(this.curTitle).style.color = '#646060';
    document.getElementById(this.curTitle).style.fontSize = '0.8rem';
    document.getElementById(this.curTitle).style.lineHeight = '4';
    document.getElementById(id).style.background = '#ffffff';
    document.getElementById(id).style.color = '#000000';
    document.getElementById(id).style.fontSize = '1rem';
    document.getElementById(id).style.lineHeight = '3.2';
    this.curTitle = id;
  }

  // 跳转商品列表页面
  pushProductPage(value: any) {
  }
}
