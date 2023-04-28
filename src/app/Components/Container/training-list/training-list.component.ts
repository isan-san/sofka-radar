import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/Models/Training';
import { TrainingService } from '../../../Services/training-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.scss']
})
export class TrainingListComponent implements OnInit {
  trainings: Training[] = [];

  constructor(private trainingService: TrainingService, private router: Router) {}

  goTrainingId(id: string): void {
    this.router.navigate(['/training', id]);
  }

  goNewTraining(): void {
    this.router.navigate(['/training/new']);
  }

  ngOnInit(): void {
    this.trainingService.getAll().subscribe((training: Training[]) => {
      this.trainings = training;
    });
  }
}
