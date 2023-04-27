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
import { MainPageComponent } from './Components/Pages/main-page/main-page.component';
import { LoginComponent } from './Components/Pure/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NewUserPageComponent } from './Components/Pages/new-user-page/new-user-page.component';
import { FormUserComponent } from './Components/Pure/form-user/form-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import { UsersPageComponent } from './Components/Pages/users-page/users-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


@NgModule({
  declarations: [
    AppComponent,
    RadarComponent,
    RadarListComponent,
    RadarPageComponent,
    NavBarComponent,
    NewRadarPageComponent,
    MainPageComponent,
    LoginComponent,
    NewUserPageComponent,
    FormUserComponent,
    UsersPageComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSelectModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
