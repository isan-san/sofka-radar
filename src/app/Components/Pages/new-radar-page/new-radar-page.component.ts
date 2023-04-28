import { Component } from '@angular/core';
import {
  Descriptor,
  defaultDescriptio as defaultDescriptior,
} from 'src/app/Models/Radar';
import { RadarService } from 'src/app/Services/radar-service.service';
import { Radar } from '../../../Models/Radar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-radar-page',
  templateUrl: './new-radar-page.component.html',
  styleUrls: ['./new-radar-page.component.scss'],
})
export class NewRadarPageComponent {
  constructor(private radarService: RadarService,private router: Router) {}

  descriptorList: Descriptor[] = [
    {
      knowledgeArea: '',
      description: '',
      factual: 0,
      conceptual: 0,
      procedural: 0,
      metacognitive: 0,
      approvalLevel: 0,
    },
  ];
  addDescriptor() {
    this.descriptorList.push({
      knowledgeArea: '',
      description: '',
      factual: 0,
      conceptual: 0,
      procedural: 0,
      metacognitive: 0,
      approvalLevel: 0,
    });
  }
  removeDescriptor(index: number) {
    this.descriptorList = [
      ...this.descriptorList.slice(0, index - 1),
      ...this.descriptorList.slice(index),
    ];
  }

  onSubmit() {
    if (confirm('Are you sure you want to crete the radar?')) {
      if (
        this.descriptorList.find(
          (descriptior) => descriptior.description === ''
        )
      ) {
        alert('All descriptors must have a description');
      } else {
        var newRadar: Radar = {
          descriptorList: this.descriptorList,
        };
        this.radarService.create(newRadar).subscribe((radar: Radar) => {
          alert('Radar created succesfully!');
          this.router.navigate(['/radar']);
        });
      }
    }
  }
}
