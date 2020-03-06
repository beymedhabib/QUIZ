import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CoachComponent } from './coach/coach.component';
import { CondidatComponent } from './condidat/condidat.component';
import { ListComponent } from './coach/list/list.component';
import { AddComponent } from './coach/add/add.component';
import { UpdateComponent } from './coach/update/update.component';
import { PassagetestComponent } from './condidat/passagetest/passagetest.component';


const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'cotch', component: CoachComponent},
  { path: 'condidat', component: CondidatComponent},
  { path: 'cotch/add', component: AddComponent},
  { path: 'cotch/list', component: ListComponent},
  { path: 'cotch/update/:i', component: UpdateComponent},
  { path: 'condidat/passagetest/:i', component: PassagetestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
