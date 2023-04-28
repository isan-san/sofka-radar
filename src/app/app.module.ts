import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadarComponent } from './Components/Pure/radar/radar.component';
import { RadarListComponent } from './Components/Container/radar-list/radar-list.component';
import { RadarPageComponent } from './Components/Pages/radar-page/radar-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavBarComponent } from './Components/Pure/nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { NewRadarPageComponent } from './Components/Pages/new-radar-page/new-radar-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TrainingListComponent } from './Components/Container/training-list/training-list.component';
import { TrainingPageComponent } from './Components/Pages/training-page/training-page.component';
import { TrainingComponent } from './Components/Pure/training/training.component';
import { SipderChartComponent } from './Components/Pure/sipder-chart/sipder-chart.component';
import { MainPageComponent } from './Components/Pages/main-page/main-page.component';
import { LoginComponent } from './Components/Pure/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NewUserPageComponent } from './Components/Pages/new-user-page/new-user-page.component';
import { FormUserComponent } from './Components/Pure/form-user/form-user.component';
import { MatSelectModule } from '@angular/material/select';
import { UsersPageComponent } from './Components/Pages/users-page/users-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { UserListComponent } from './Components/Container/user-list/user-list.component';
import { NewTrainingPageComponent } from './Components/Pages/new-training-page/new-training-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ErrorPageComponent } from './Components/Pages/error-page/error-page.component';
import { ErrorComponent } from './Components/Pure/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    RadarComponent,
    RadarListComponent,
    RadarPageComponent,
    NavBarComponent,
    NewRadarPageComponent,
    TrainingListComponent,
    TrainingPageComponent,
    TrainingComponent,
    SipderChartComponent,
    MainPageComponent,
    LoginComponent,
    NewUserPageComponent,
    FormUserComponent,
    UsersPageComponent,
    UserListComponent,
    NewTrainingPageComponent,
    ErrorPageComponent,
    ErrorComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    AngularFireDatabaseModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
