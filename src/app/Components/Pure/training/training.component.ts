import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprenticesList, Training, defaultTraining } from 'src/app/Models/Training';
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
  approvalLevel: number = 0;
  actualLevel: number = 0;
  panelOpenState = false;

  ngOnInit(): void {
    this.trainingSerive
      .get(this.route.snapshot.paramMap.get('trainingId') as string)
      .subscribe((training) => {
        this.training = training;
        this.approvalLevel = this.calculateAverage(
          training.trainingRadar.descriptorList.map(
            (descriptor) => descriptor.approvalLevel
          )
        );
        this.actualLevel =
          Math.floor(
            this.calculateAverage(
              this.training.apprenticesList.map((aprentice) =>
                this.calculateAverage(
                  aprentice.descriptorList.map(
                    (descriptor) => descriptor.approvalLevel
                  )
                )
              )
            ) * 10
          ) / 10;
      });
  }

  calculateAverageForAprentice = (aprentice: ApprenticesList) => {
    return this.calculateAverage(
      aprentice.descriptorList.flatMap((descriptor) => [descriptor.factual,descriptor.conceptual,descriptor.procedural,descriptor.metacognitive])
    );
  };
  calculateAverage = (scoresList: number[]): number => {
    return (
      scoresList.reduce((accumulator, score) => accumulator + score, 0) /
      scoresList.length
    );
  };
  calculateDescriptorsAverage = (aprentice: ApprenticesList): number[] => {
    return [
      this.calculateAverage(
        aprentice.descriptorList.map((descriptor) => descriptor.factual)
      ),
      this.calculateAverage(
        aprentice.descriptorList.map((descriptor) => descriptor.procedural)
      ),
      this.calculateAverage(
        aprentice.descriptorList.map((descriptor) => descriptor.metacognitive)
      ),
      this.calculateAverage(
        aprentice.descriptorList.map((descriptor) => descriptor.approvalLevel)
      ),
    ];
  };

  deleteTraining(trainigId: any) {
    this.trainingSerive.delete(trainigId).subscribe({
      next: () => {},
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {},
    });
    alert('Training deleted!')
    this.router.navigate(['/training'])
  }
}
