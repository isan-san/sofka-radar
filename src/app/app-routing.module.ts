import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarPageComponent } from './Components/Pages/radar-page/radar-page.component';
import { RadarComponent } from './Components/Pure/radar/radar.component';
import { NewRadarPageComponent } from './Components/Pages/new-radar-page/new-radar-page.component';
import { TrainingPageComponent } from './Components/Pages/training-page/training-page.component';
import { TrainingComponent } from './Components/Pure/training/training.component';

const routes: Routes = [
  {
    path: 'radar',
    component: RadarPageComponent,
  },
  {
    path: 'radar/new',
    component: NewRadarPageComponent,
  },
  { path: 'radar/:radarId', component: RadarComponent },
  {
    path: 'training',
    component: TrainingPageComponent,
  },
  {
    path: 'training/new',
    component: NewRadarPageComponent,
  },
  { path: 'training/:trainingId', component: TrainingComponent },
  // Add more routes here if needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
