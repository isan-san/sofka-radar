import { Component, Input, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sipder-chart',
  templateUrl: './sipder-chart.component.html',
  styleUrls: ['./sipder-chart.component.scss'],
})
export class SipderChartComponent implements AfterViewInit {
  chart: Chart | undefined;

  @Input() trainingName: string = '';
  @Input() actualScore: number = 0;
  @Input() expectedValues: [
    actual: number,
    onceptual: number,
    rocedural: number,
    etacognitive: number
  ] = [0, 0, 0, 0];
  @Input() actualValues: [
    actual: number,
    onceptual: number,
    rocedural: number,
    etacognitive: number
  ] = [0, 0, 0, 0];

  ngAfterViewInit() {

    this.actualScore = Math.floor(this.actualScore*10)/10


    const data = {
      labels: ['actual', 'onceptual', 'rocedural', 'etacognitive'],
      datasets: [
        {
          label: 'Expected',
          data: this.expectedValues,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
        },
        {
          label: `Actual ${this.actualScore}`,
          data: this.actualValues,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2,
        },
      ],
    };

    const options = {
      scale: {
        ticks: { beginAtZero: true },
        angleLines: { display: false },
        pointLabels: { fontSize: 18 },
        r: {
          max: this.expectedValues.sort((a,b)=>b-a)[0],
          min: 0,
          ticks: {
            stepSize: 1,
          },
        },
      },
      plugins: {
        title: { display: true, text: 'Spider Chart' },
      },
    };
    this.chart = new Chart(this.trainingName, {
      type: 'radar',
      data: data,
      options: options,
    });
  }
}
