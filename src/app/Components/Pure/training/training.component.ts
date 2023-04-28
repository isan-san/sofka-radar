import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprenticesList, Training, defaultTraining } from 'src/app/Models/Training';
import { TrainingServiceService } from 'src/app/Services/training-service.service';
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
        this.approvalLevel = calculateAverage(
          training.trainingRadar.descriptorList.map(
            (descriptor) => descriptor.approvalLevel
          )
        );
        this.actualLevel = calculateAverage(
          this.aprenticeList.map((aprentice) =>
            calculateAverage(
              aprentice.descriptorList.map(
                (descriptor) => descriptor.approvalLevel
              )
            )
          )
        );
      });
  }

  aprenticeList = [
    {
      name: 'nombre_1',
      apprenticeId: '123465789',
      descriptorList: [
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: 3,
          conceptual: 1,
          procedural: 4,
          metacognitive: 5,
          approvalLevel: 5,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: 5,
          conceptual: 6,
          procedural: 7,
          metacognitive: 8,
          approvalLevel: 7,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: 1,
          conceptual: 5,
          procedural: 6,
          metacognitive: 1,
          approvalLevel: 2,
        },
      ],
    },
    {
      name: 'nombre_2',
      apprenticeId: '123465789',
      descriptorList: [
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: 3,
          conceptual: 1,
          procedural: 4,
          metacognitive: 5,
          approvalLevel: 4,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: 5,
          conceptual: 6,
          procedural: 7,
          metacognitive: 8,
          approvalLevel: 7,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: 1,
          conceptual: 5,
          procedural: 6,
          metacognitive: 1,
          approvalLevel: 8,
        },
      ],
    },
    {
      name: 'nombre_3',
      apprenticeId: '123465789',
      descriptorList: [
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: 3,
          conceptual: 1,
          procedural: 4,
          metacognitive: 5,
          approvalLevel: 4,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: 5,
          conceptual: 6,
          procedural: 7,
          metacognitive: 8,
          approvalLevel: 5,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: 1,
          conceptual: 5,
          procedural: 6,
          metacognitive: 1,
          approvalLevel: 3,
        },
      ],
    },
  ];
  calculateAverageForAprentice = (aprentice:ApprenticesList) =>{
    return calculateAverage(
      aprentice.descriptorList.map(
        (descriptor) => descriptor.approvalLevel
      )
    )
  }
}
const calculateAverage = (scoresList: number[]): number => {
  return (
    scoresList.reduce((accumulator, score) => accumulator + score, 0) /
    scoresList.length
  );
};

