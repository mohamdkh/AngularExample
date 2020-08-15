import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MetiersComponent } from './metiers/metiers.component';
const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Metiers', component: MetiersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
