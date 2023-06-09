import { Component, OnInit } from '@angular/core';
import { Radar } from 'src/app/Models/Radar';
import { RadarService } from '../../../Services/radar-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radar-list',
  templateUrl: './radar-list.component.html',
  styleUrls: ['./radar-list.component.scss'],
})
export class RadarListComponent implements OnInit {
  radars: Radar[] = radars;

  constructor(private radarService: RadarService, private router: Router) {}

  goRadarId(id: string): void {
    this.router.navigate(['/radar', id]);
  }

  goNewRadar(): void {
    this.router.navigate(['/radar/new']);
  }

  ngOnInit(): void {
    this.radarService.getAll().subscribe((radars: Radar[]) => {
      this.radars = radars;
    });
  }
  calculateAverage(radar: Radar): number {
    return (
      radar.descriptorList.reduce(
        (accumulator, descriptor) => accumulator + descriptor.approvalLevel,
        0
      ) / radar.descriptorList.length
    );
  }
}

const radars: Radar[] = [
  {
    radarId: '6446fccb62d63f3fd834d971',
    descriptorList: [
      {
        knowledgeArea: 'Best Practice',
        description: 'Clean Code',
        factual: 5,
        conceptual: 5,
        procedural: 5,
        metacognitive: 3,
        approvalLevel: 4,
      },
      {
        knowledgeArea: 'Best Practice',
        description: 'Refactoring',
        factual: 5,
        conceptual: 5,
        procedural: 4,
        metacognitive: 2,
        approvalLevel: 4,
      },
      {
        knowledgeArea: 'Best Practice',
        description: 'Unit Test(Backend)',
        factual: 5,
        conceptual: 5,
        procedural: 5,
        metacognitive: 3,
        approvalLevel: 4,
      },
      {
        knowledgeArea: 'Architecture',
        description: 'Architecture Fundamentals',
        factual: 5,
        conceptual: 5,
        procedural: 3,
        metacognitive: 1,
        approvalLevel: 3,
      },
      {
        knowledgeArea: 'Architecture',
        description: 'DDD',
        factual: 5,
        conceptual: 5,
        procedural: 4,
        metacognitive: 2,
        approvalLevel: 4,
      },
      {
        knowledgeArea: 'Client-Side',
        description: 'Angular',
        factual: 5,
        conceptual: 5,
        procedural: 4,
        metacognitive: 3,
        approvalLevel: 4,
      },
      {
        knowledgeArea: 'Metodology',
        description: 'Agile',
        factual: 5,
        conceptual: 5,
        procedural: 4,
        metacognitive: 3,
        approvalLevel: 4,
      },
      {
        knowledgeArea: 'Server-Side',
        description: 'Spring Boot',
        factual: 5,
        conceptual: 5,
        procedural: 4,
        metacognitive: 3,
        approvalLevel: 4,
      },
      {
        knowledgeArea: 'Server-Side',
        description: 'Java',
        factual: 5,
        conceptual: 5,
        procedural: 5,
        metacognitive: 4,
        approvalLevel: 4,
      },
      {
        knowledgeArea: 'Server-Side',
        description: 'Reactive',
        factual: 5,
        conceptual: 5,
        procedural: 4,
        metacognitive: 2,
        approvalLevel: 4,
      },
    ],
  },
];
