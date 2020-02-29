import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/data/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.page.html',
  styleUrls: ['./design.page.scss'],
})
export class DesignPage implements OnInit {

  private category = []; // 模型分类

  constructor(private router: Router) {
    this.category = Menu.designCategory; // 从Menu导入数据
   }

  ngOnInit() {
  }

  // 跳转模型页面
  goModelPage(typeId: string, typeName: string) {
    this.router.navigate(['model', typeId, typeName]);
  }

}
