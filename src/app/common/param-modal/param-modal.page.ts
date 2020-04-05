import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-param-modal',
  templateUrl: './param-modal.page.html',
  styleUrls: ['./param-modal.page.scss'],
})
export class ParamModalPage implements OnInit {

  @Input() data: any;
  private model = [];
  private shellFabricOpts = [];
  private sizeOpts = [];
  private sleeveLeftColors = [];
  private sleeveRightColors = [];
  private trouserLeftColors = [];
  private trouserRightColors = [];

  // 选择结果
  private shellFabric = '';
  private size = '';
  private sleeveLeftColor = '';
  private sleeveRightColor = '';
  private trouserLeftColor = '';
  private trouserRightColor = '';

  // select框配置，参考 base-ui
  customOptions: any = {
    cssClass: 'more-select'
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.data);
    this.initParams();
  }

  initParams() {
    for (const i in this.data) {
      if (i === 'belong' && this.data[i] !== null) {
        this.model.push({ key: '属于', value: this.data[i] + '' });
      } else if (i === 'category' && this.data[i] !== null) {
        this.model.push({ key: '类别', value: this.data[i] + '' });
      } else if (i === 'main_style' && this.data[i] !== null) {
        this.model.push({ key: '主题风格', value: this.data[i] + '' });
      } else if (i === 'time_to_market' && this.data[i] !== null) {
        this.model.push({ key: '上市时间', value: this.data[i] + '' });
      } else if (i === 'washing' && this.data[i] !== null) {
        this.model.push({ key: '洗水工艺', value: this.data[i] + '' });
      } else if (i === 'material' && this.data[i] !== null) {
        this.model.push({ key: '材质', value: this.data[i] + '' });
      } else if (i === 'thickness' && this.data[i] !== null) {
        this.model.push({ key: '厚薄', value: this.data[i] + '' });
      } else if (i === 'clothing_technology' && this.data[i] !== null) {
        this.model.push({ key: '工艺', value: this.data[i] + '' });
      } else if (i === 'collar_type' && this.data[i] !== null) {
        this.model.push({ key: '领型', value: this.data[i] + '' });
      } else if (i === 'model_type' && this.data[i] !== null) {
        this.model.push({ key: '版型', value: this.data[i] + '' });
      } else if (i === 'suitable' && this.data[i] !== null) {
        this.model.push({ key: '适用对象', value: this.data[i] + '' });
      } else if (i === 'season' && this.data[i] !== null) {
        this.model.push({ key: '适用季节', value: this.data[i] + '' });
      } else if (i === 'placket' && this.data[i] !== null) {
        this.model.push({ key: '门襟', value: this.data[i] + '' });
      } else if (i === 'front_pant' && this.data[i] !== null) {
        this.model.push({ key: '裤门襟', value: this.data[i] + '' });
      } else if (i === 'pocket' && this.data[i] !== null) {
        this.model.push({ key: '口袋样式', value: this.data[i] + '' });
      } else if (i === 'color' && this.data[i] !== null && this.data[i].length > 0) {
        this.model.push({ key: '颜色', value: this.data[i] + '' });
      } else if (i === 'filler' && this.data[i] !== null) {
        this.model.push({ key: '填充物', value: this.data[i] + '' });
      } else if (i === 'hem_style' && this.data[i] !== null) {
        this.model.push({ key: '下摆设计', value: this.data[i] + '' });
      } else if (i === 'cuff_style' && this.data[i] !== null) {
        this.model.push({ key: '袖口设计', value: this.data[i] + '' });
      } else if (i === 'sleeve' && this.data[i] !== null) {
        this.model.push({ key: '袖长', value: this.data[i] + '' });
      } else if (i === 'outside_length' && this.data[i] !== null) {
        this.model.push({ key: '裤长', value: this.data[i] + '' });
      } else if (i === 'waist_style' && this.data[i] !== null) {
        this.model.push({ key: '腰型', value: this.data[i] + '' });
      } else if (i === 'trouser_hem' && this.data[i] !== null) {
        this.model.push({ key: '裤脚口设计', value: this.data[i] + '' });
      }
    }

    if (this.data.shell_fabric !== null) {
      const opts = this.data.shell_fabric.split(',');
      opts.forEach((e: string) => {
        this.shellFabricOpts.push({ value: e });
      });
    }

    if (this.data.size !== null) {
      const sizes = this.data.size.split(',');
      sizes.forEach((e: string) => {
        this.sizeOpts.push({ value: e });
      });
    }

    if (this.data.sleeve_left_color !== null) {
      const colors = this.data.sleeve_left_color.split(',');
      colors.forEach((e: string) => {
        this.sleeveLeftColors.push({ value: e });
      });
    }

    if (this.data.sleeve_right_color !== null) {
      const colors = this.data.sleeve_right_color.split(',');
      colors.forEach((e: string) => {
        this.sleeveRightColors.push({ value: e });
      });
    }

    if (this.data.trouser_left_color !== null) {
      const colors = this.data.trouser_left_color.split(',');
      colors.forEach((e: string) => {
        this.trouserLeftColors.push({ value: e });
      });
    }

    if (this.data.trouser_right_color !== null) {
      const colors = this.data.trouser_right_color.split(',');
      colors.forEach((e: string) => {
        this.trouserRightColors.push({ value: e });
      });
    }
  }

  // 面料选择结果
  getSelectSF(event: any) {
    this.shellFabric = event.target.value;
  }

  // 颜色选择结果
  getSelectSize(event: any) {
    this.size = event.target.value;
  }

  getSelect1(event: any) {
    this.sleeveLeftColor = event.target.value;
  }

  getSelect2(event: any) {
    this.sleeveRightColor = event.target.value;
  }

  getSelect3(event: any) {
    this.trouserLeftColor = event.target.value;
  }

  getSelect4(event: any) {
    this.trouserRightColor = event.target.value;
  }

  confirm() {
    const data = [];
    if (this.shellFabric.length > 0) {
      data.push({ key: 'shellFabric', value: this.shellFabric });
    }
    if (this.size.length > 0) {
      data.push({ key: 'size', value: this.size });
    }
    if (this.sleeveLeftColor.length > 0) {
      data.push({ key: 'sleeveLeftColor', value: this.sleeveLeftColor });
    }
    if (this.sleeveRightColor.length > 0) {
      data.push({ key: 'sleeveRightColor', value: this.sleeveRightColor });
    }
    if (this.trouserLeftColor.length > 0) {
      data.push({ key: 'trouserLeftColor', value: this.trouserLeftColor });
    }
    if (this.trouserRightColor.length > 0) {
      data.push({ key: 'trouserRightColor', value: this.trouserRightColor });
    }
    this.modalCtrl.dismiss(data);
  }

}
