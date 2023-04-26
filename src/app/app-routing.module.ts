import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarPageComponent } from './Components/Pages/radar-page/radar-page.component';
import { RadarComponent } from './Components/Pure/radar/radar.component';
import { NewRadarPageComponent } from './Components/Pages/new-radar-page/new-radar-page.component';

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
  // Add more routes here if needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
