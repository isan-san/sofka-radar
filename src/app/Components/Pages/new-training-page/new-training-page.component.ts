import { Component } from '@angular/core';
import { Descriptor } from 'src/app/Models/Radar';
import { TrainingService } from 'src/app/Services/training-service.service';
import { Training } from '../../../Models/Training';
import { RadarService } from 'src/app/Services/radar-service.service';
import { Radar } from '../../../Models/Radar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-training-page',
  templateUrl: './new-training-page.component.html',
  styleUrls: ['./new-training-page.component.scss'],
})
export class NewTrainingPageComponent {
  constructor(
    private trainingService: TrainingService,
    private radarService: RadarService,
    private router: Router
  ) {}

  l_radar: Radar[] = [];

  radarId: string = '';

  training: Training = {
    trainingName: '',
    trainingCycle: '',
    trainingRadar: {
      radarId: '',
      descriptorList: [],
    },
    apprenticesList: [],
  };

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.radarService.getAll().subscribe({
      next: (radar) => {
        this.l_radar = radar;
      },
      error: console.log,
      complete: console.log,
    });
  }

  onSubmit() {
    if (confirm('Are you sure you want to crete the radar?')) {
      var newTraining: Training = {
        trainingName: this.training.trainingName,
        trainingCycle: this.training.trainingCycle,
        trainingRadar: this.l_radar.find(radar => radar.radarId! === this.radarId) as Radar,
        apprenticesList: [],
      };
      this.trainingService.create(newTraining).subscribe((trainig: Training) => {
        alert('Radar created succesfully!');
        this.router.navigate(['/training']);
      });
      this.router.navigate(['/training']);
    }
  }
}
