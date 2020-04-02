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

  constructor(private modalCtrl: ModalController, private loadingCtrl: LoadingController) {
    super();
  }

  ngOnInit() {
    if (this.data.type === 'draft') {
      this.calculateDraft();
    } else if (this.data.type === 'task') {
      this.calculateTask();
    } else {
      this.dismiss();
    }

  }

  // 设计稿评分
  calculateDraft() {
    let specialScore = 0;
    let deduction = 0;
    // 特色 +5
    if (this.data.sleeve_left_color !== undefined) {
      if (this.data.sleeve_left_color !== '保持原样' && this.data.sleeve_left_color.length > 0) {
        specialScore = specialScore + 5;
      }
    }
    // 特色 +5
    if (this.data.sleeve_right_color !== undefined) {
      if (this.data.sleeve_right_color !== '保持原样' && this.data.sleeve_left_color.length > 0) {
        specialScore = specialScore + 5;
      }
    }
    // 特色 +5
    if (this.data.trouser_left_color !== undefined) {
      if (this.data.trouser_left_color !== '保持原样' && this.data.trouser_left_color.length > 0) {
        specialScore = specialScore + 5;
      }
    }
    // 特色 +5
    if (this.data.trouser_right_color !== undefined) {
      if (this.data.trouser_right_color !== '保持原样' && this.data.trouser_right_color.length > 0) {
        specialScore = specialScore + 5;
      }
    }
    // 正面印花 +5
    if (this.data.printing_front !== '') {
      specialScore = specialScore + 5;
    }
    // 背面印花 +5
    if (this.data.printing_back !== '') {
      specialScore = specialScore + 5;
    }
    // 签名 +5
    if (this.data.signature !== '') {
      specialScore = specialScore + 5;
    }

    this.score = 70 + specialScore + deduction;
    this.draftPie(specialScore, deduction);
  }

  // 任务单评分
  calculateTask() {
    // 设计稿占比70%
    const score1 = Number(this.data.score) * 0.7;

    // 金额占比15%，基础9分，多一元加0.1，少一元减0.5，最高15分，最低0分
    let score2 = 9;
    const e1 = Number(this.data.expect_amount);
    const e2 = Number(this.data.reference_price);
    if (e1 > e2) { // 如果定金大于参考价格
      let e = (e1 - e2) * 0.1;
      if (e > 6) { // 如果超过 6，则只加6分
        e = 6;
      }
      score2 = score2 + e;
    } else if (e2 > e1) {
      let e = (e2 - e1) * 0.5;
      if (e > 9) { // 如果超过 9，则只减9分
        e = 9;
      }
      score2 = score2 - e;
    } else { }

    // 时间占比12%，基础7分，多一天加0.1，少一天减0.5，最高12分，最低0分
    let score3 = 7;
    const d1 = Number(this.data.delivery);
    const d2 = Number(this.data.reference_delivery);
    if (d1 > d2) { // 如果定制时间大于参考定制时间
      let d = (d1 - d2) * 0.1;
      if (d > 5) { // 如果超过 6，则只加6分
        d = 5;
      }
      score3 = score3 + d;
    } else if (d2 > d1) {
      let d = (d2 - d1) * 0.5;
      if (d > 7) { // 如果超过 9，则只减9分
        d = 7;
      }
      score3 = score3 - d;
    } else { }

    // 补充说明占比3%，没有0分，大于0个字加1，大于10个字加2，大于20个字加3
    let score4 = 0;
    const supplement = this.data.supplement;
    if (supplement.length > 0 && supplement.length < 11) {
      score4 = 1;
    } else if (supplement.length > 10 && supplement.length < 21) {
      score4 = 2;
    } else if (supplement.length > 20) {
      score4 = 3;
    } else { }

    this.taskPie(score1, score2, score3, score4); // 饼状图展示
    this.score = Math.round(score1 + score2 + score3 + score4); // 加起来四舍五入
  }

  dismiss() {
    this.modalCtrl.dismiss({ res: this.score + '' });
  }

  // 设计稿饼状图
  draftPie(specialScore: number, deduction: number) {
    const ec = echarts as any;
    const container = document.getElementById('chart');
    const chart = ec.init(container);
    const option = {
      series: [
        {
          name: '评分',
          type: 'pie',
          data: [
            { value: 70, name: '基础评分 70' },
            { value: specialScore, name: '特色评分 ' + specialScore },
            { value: deduction, name: '扣分 ' + deduction }
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
        data: ['基础评分 70', '特色评分 ' + specialScore, '扣分 ' + deduction]
      },
    };
    chart.setOption(option);
  }

  // 任务单评分饼状图
  taskPie(s1: number, s2: number, s3: number, s4: number) {
    const ec = echarts as any;
    const container = document.getElementById('chart');
    const chart = ec.init(container);
    const option = {
      series: [
        {
          name: '评分',
          type: 'pie',
          data: [
            { value: s1, name: '设计稿' },
            { value: s2, name: '定金' },
            { value: s3, name: '时间' },
            { value: s4, name: '补充说明' }
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
        data: ['设计稿', '定金', '时间', '补充说明']
      },
    };
    chart.setOption(option);
  }

}
