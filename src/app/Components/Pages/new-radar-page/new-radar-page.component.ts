import { Component } from '@angular/core';
import {
  Descriptor,
  defaultDescriptio as defaultDescriptior,
} from 'src/app/Models/Radar';
import { RadarService } from 'src/app/Services/radar-service.service'
import { Radar } from '../../../Models/Radar';

@Component({
  selector: 'app-new-radar-page',
  templateUrl: './new-radar-page.component.html',
  styleUrls: ['./new-radar-page.component.scss'],
})
export class NewRadarPageComponent {

  constructor(
    private radarService: RadarService
  ){}


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

  onSubmit(){
    var newRadar: Radar = {
      descriptorList: this.descriptorList,
    }
    this.radarService.create(newRadar)
    .subscribe(
      data => console.log('Succes!', data),
      error => console.log('Error!', error)
    )
  }
}
