import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadarComponent } from './Components/Pure/radar/radar.component';
import { RadarListComponent } from './Components/Container/radar-list/radar-list.component';
import { RadarPageComponent } from './Components/Pages/radar-page/radar-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavBarComponent } from './Components/Pure/nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { NewRadarPageComponent } from './Components/Pages/new-radar-page/new-radar-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    RadarComponent,
    RadarListComponent,
    RadarPageComponent,
    NavBarComponent,
    NewRadarPageComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
