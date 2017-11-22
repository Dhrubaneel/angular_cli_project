import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { CityComponent } from '../city/city.component';
import {AgendaComponent } from '../agenda/agenda.component';

const routes : Routes = [
  { path: '', component: LoginComponent},
  { path: 'city', component: CityComponent},
  { path: 'agenda/:id', component: AgendaComponent},
  { path: '**', redirectTo: 'city', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
