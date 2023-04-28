import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/Services/training-service.service';

@Component({
  selector: 'app-add-apprentice',
  templateUrl: './add-apprentice.component.html',
  styleUrls: ['./add-apprentice.component.scss'],
})
export class AddApprenticeComponent implements OnInit {
  apprenticeForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    descriptorList: new FormControl([]),
  });
  trainingId: string = '';
  currentTraining: any = {
    trainingName: '',
    trainingCycle: '',
    trainingRadar: { descriptorList: [] },
    apprenticesList: [],
  };


  constructor(
    private router: Router,
    private trainingService: TrainingService,
    private activateRute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRute.params.subscribe((params) => {
      this.trainingId = params['trainingId'];
      this.trainingService.get(this.trainingId).subscribe((data) => {
        this.currentTraining = data;
      });
    });
  }

  onSave() {
    this.currentTraining.apprenticesList.push({
      name: this.apprenticeForm.value.name,
      email: this.apprenticeForm.value.email,
    });
    this.trainingService.update(this.currentTraining).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {},
    });
    this.router.navigate([`/training`]);
  }
}
