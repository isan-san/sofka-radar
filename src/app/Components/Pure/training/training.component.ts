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
              this.aprenticeList.map((aprentice) =>
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

  aprenticeList = [
    {
      name: 'nombre_1',
      apprenticeId: '123465789',
      descriptorList: [
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: Math.random() * 5,
          conceptual: Math.random() * 5,
          procedural: Math.random() * 5,
          metacognitive: Math.random() * 5,
          approvalLevel: 5,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: Math.random() * 5,
          conceptual: Math.random() * 5,
          procedural: Math.random() * 5,
          metacognitive: Math.random() * 5,
          approvalLevel: 5,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: Math.random() * 5,
          conceptual: Math.random() * 5,
          procedural: Math.random() * 5,
          metacognitive: Math.random() * 5,
          approvalLevel: 5,
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
          factual: Math.random() * 5,
          conceptual: Math.random() * 5,
          procedural: Math.random() * 5,
          metacognitive: Math.random() * 5,
          approvalLevel: 5,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: Math.random() * 5,
          conceptual: Math.random() * 5,
          procedural: Math.random() * 5,
          metacognitive: Math.random() * 5,
          approvalLevel: 5,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: Math.random() * 5,
          conceptual: Math.random() * 5,
          procedural: Math.random() * 5,
          metacognitive: Math.random() * 5,
          approvalLevel: 5,
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
          factual: Math.random() * 5,
          conceptual: Math.random() * 5,
          procedural: Math.random() * 5,
          metacognitive: Math.random() * 5,
          approvalLevel: 5,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: Math.random() * 5,
          conceptual: Math.random() * 5,
          procedural: Math.random() * 5,
          metacognitive: Math.random() * 5,
          approvalLevel: 5,
        },
        {
          knowledgeArea: 'string',
          description: 'string',
          factual: Math.random() * 5,
          conceptual: Math.random() * 5,
          procedural: Math.random() * 5,
          metacognitive: Math.random() * 5,
          approvalLevel: 5,
        },
      ],
    },
  ];
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
}
