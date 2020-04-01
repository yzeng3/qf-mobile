import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { BaseUI } from '../base-ui';
import * as echarts from 'echarts';

@Component({
  selector: 'app-score-modal',
  templateUrl: './score-modal.page.html',
  styleUrls: ['./score-modal.page.scss'],
})
export class ScoreModalPage extends BaseUI implements OnInit {

  @Input() data: any;
  private score = 70;
  private specialScore = 0;
  private deduction = 0;

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController) {
    super();
  }

  ngOnInit() {
    this.score = 70;
    console.log(this.data);
    this.calculateDraft();
    this.ionViewDidEnter();
  }

  // 设计稿评分
  async calculateDraft() {
    const loading = await super.presentLoading(this.loadingCtrl, '计算中');
    if (this.data.sleeve_left_color !== undefined) {
      if (this.data.sleeve_left_color !== '保持原样') {
        this.score = this.score + 5;
        this.specialScore = this.specialScore + 5;
      }
    }

    if (this.data.sleeve_right_color !== undefined) {
      if (this.data.sleeve_right_color !== '保持原样') {
        this.score = this.score + 5;
        this.specialScore = this.specialScore + 5;
      }
    }

    if (this.data.printing_front !== '') {
      this.score = this.score + 5;
      this.specialScore = this.specialScore + 5;
    }

    if (this.data.printing_back !== '') {
      this.score = this.score + 5;
      this.specialScore = this.specialScore + 5;
    }

    if (this.data.signature !== '') {
      this.score = this.score + 5;
      this.specialScore = this.specialScore + 5;
    }

    loading.dismiss();

  }

  dismiss() {
    this.score = 70;
    this.specialScore = 0;
    this.deduction = 0;
    this.modalCtrl.dismiss({ res: this.score });
  }


  ionViewDidEnter() {
    const ec = echarts as any;
    const container = document.getElementById('chart');
    console.log(container);
    const chart = ec.init(container);
    const option = {
      series: [
        {
          name: '评分',
          type: 'pie',
          data: [
            { value: 70, name: '基础评分 70' },
            { value: this.specialScore, name: '特色评分 ' + this.specialScore },
            { value: this.deduction, name: '扣分 ' + this.deduction }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
      legend: {
        show: true,
        data: ['基础评分 70', '特色评分 ' + this.specialScore, '扣分 ' + this.deduction]
      },
    };

    chart.setOption(option);
  }

}
