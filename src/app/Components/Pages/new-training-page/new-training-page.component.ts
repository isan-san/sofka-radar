import { Component } from '@angular/core';
import { Descriptor } from 'src/app/Models/Radar';
import { TrainingService } from 'src/app/Services/training-service.service'
import { Training } from '../../../Models/Training';
import { RadarService } from 'src/app/Services/radar-service.service'
import { Radar } from '../../../Models/Radar';

@Component({
  selector: 'app-new-training-page',
  templateUrl: './new-training-page.component.html',
  styleUrls: ['./new-training-page.component.scss']
})
export class NewTrainingPageComponent {


  constructor(
    private trainingService: TrainingService,
    private radarService: RadarService
  ){}

  l_radar: Radar[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.radarService.getAll().subscribe({
      next: (radar) => {
        this.l_radar = radar;
      },
      error: (console.log),
      complete: (console.log)
    })
  }

  onSubmit(){/*
    var newTraining: Training = {
    }
    this.radarService.create(newRadar)
    .subscribe(
      data => console.log('Succes!', data),
      error => console.log('Error!', error)
    )*/
  }
}
