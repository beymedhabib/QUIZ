import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CondidatComponent } from './condidat/condidat.component';
import { CoachComponent } from './coach/coach.component';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { AddComponent } from './coach/add/add.component';
import { ListComponent } from './coach/list/list.component';
import { UpdateComponent } from './coach/update/update.component';
import { ListtestComponent } from './condidat/listtest/listtest.component';
import { PassagetestComponent } from './condidat/passagetest/passagetest.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    CondidatComponent,
    CoachComponent,
    RegisterComponent,
    LoginComponent,
    AddComponent,
    ListComponent,
    UpdateComponent,
    ListtestComponent,
    PassagetestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
