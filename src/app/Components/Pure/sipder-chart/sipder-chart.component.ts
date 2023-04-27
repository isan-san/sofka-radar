import { Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sipder-chart',
  templateUrl: './sipder-chart.component.html',
  styleUrls: ['./sipder-chart.component.scss']
})
export class SipderChartComponent {
  chart: Chart|undefined;

  @Input() trainingName:string ="";

  ngOnInit() {

    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2
        },
        {
          label: 'Dataset 2',
          data: [20, 30, 40, 50, 60, 10],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 2
        }
      ]
    };

    const options = {
      scale: {
        ticks: { beginAtZero: true },
        angleLines: { display: false },
        pointLabels: { fontSize: 18 }
      },
      plugins: {
        title: { display: true, text: 'Spider Chart' }
      }
    };
    console.log(this.trainingName);

    this.chart = new Chart(this.trainingName, {
      type: 'radar',
      data: data,
      options: options
    });
  }
}
