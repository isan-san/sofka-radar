import { Component } from '@angular/core';
import {
  Descriptor,
  defaultDescriptio as defaultDescriptior,
} from 'src/app/Models/Radar';

@Component({
  selector: 'app-new-radar-page',
  templateUrl: './new-radar-page.component.html',
  styleUrls: ['./new-radar-page.component.scss'],
})
export class NewRadarPageComponent {
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
    console.log(this.descriptorList);

  }
  removeDescriptor(index: number) {
    this.descriptorList = [
      ...this.descriptorList.slice(0, index - 1),
      ...this.descriptorList.slice(index),
    ];
  }
}
