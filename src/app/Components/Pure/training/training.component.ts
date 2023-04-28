import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Training, defaultTraining } from 'src/app/Models/Training';
import { TrainingService } from 'src/app/Services/training-service.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {
  constructor(
    private trainingSerive: TrainingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  training: Training = defaultTraining;
  panelOpenState = false;

  ngOnInit(): void {
    this.trainingSerive
      .get(this.route.snapshot.paramMap.get('trainingId') as string)
      .subscribe((training) => {
        this.training = training;
      });
  }

  aprenticeList = [
    { name: 'nombre_1', descriptorList: [] },
    { name: 'nombre_2', descriptorList: [] },
    { name: 'nombre_3', descriptorList: [] },
  ];
}
