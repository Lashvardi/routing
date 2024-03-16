import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGeoComponent } from './home-geo/home-geo.component';
import { HomeEngComponent } from './home-eng/home-eng.component';
import { HomeDeComponent } from './home-de/home-de.component';
import { ErrorComponent } from './error/error.component';
// იწერება თვითონ როუტები
// ობიექტების სახით
// guard-ების დამატების საშუალება
const routes: Routes = [
  {
    path: "",
    component: HomeGeoComponent
  },
  {
    path: "eng",
    component: HomeEngComponent
  },
  {
    path: "de",
    component: HomeDeComponent
  },
  // wildCard Route
  {
    path: "**",
    component: ErrorComponent
  }
  // {
  //   path: "**",
  //   redirectTo: "eng"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
