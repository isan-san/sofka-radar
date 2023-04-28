import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarPageComponent } from './Components/Pages/radar-page/radar-page.component';
import { RadarComponent } from './Components/Pure/radar/radar.component';
import { NewRadarPageComponent } from './Components/Pages/new-radar-page/new-radar-page.component';
import { TrainingPageComponent } from './Components/Pages/training-page/training-page.component';
import { TrainingComponent } from './Components/Pure/training/training.component';
import { NewTrainingPageComponent } from './Components/Pages/new-training-page/new-training-page.component';
import { MainPageComponent } from './Components/Pages/main-page/main-page.component';
import { NewUserPageComponent } from './Components/Pages/new-user-page/new-user-page.component';
import { UsersPageComponent } from './Components/Pages/users-page/users-page.component';
import { OperationsRolGuard } from './Guards/operation-rol.guard';
import { AdminRolGuard } from './Guards/admin-rol.guard';
import { CoachRolGuard } from './Guards/coach-rol.guard';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: MainPageComponent,
  },
  {
    path: 'radar',
    component: RadarPageComponent,
    canActivate: [OperationsRolGuard],
  },
  {
    path: 'radar/new',
    component: NewRadarPageComponent,
    canActivate: [OperationsRolGuard],
  },
  {
    path: 'radar/:radarId',
    component: RadarComponent,
    canActivate: [OperationsRolGuard],
  },
  {
    path: 'users',
    component: UsersPageComponent,
    canActivate: [AdminRolGuard],
  },
  {
    path: 'users/new',
    component: NewUserPageComponent,
    canActivate: [AdminRolGuard],
  },
  {
    path: 'training',
    component: TrainingPageComponent,
    canActivate: [CoachRolGuard],
  },
  {
    path: 'training/new',
    component: NewTrainingPageComponent,
    canActivate: [CoachRolGuard],
  },
  {
    path: 'training/:trainingId',
    component: TrainingComponent,
    canActivate: [CoachRolGuard],
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
  // Add more routes here if needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
