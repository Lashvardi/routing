import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeGeoComponent } from './home-geo/home-geo.component';
import { HomeEngComponent } from './home-eng/home-eng.component';
import { HomeDeComponent } from './home-de/home-de.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeGeoComponent,
    HomeEngComponent,
    HomeDeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
