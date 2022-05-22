import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.sass']
})
export class LineChartComponent implements OnInit {

  public chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
