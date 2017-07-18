import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRouter } from './app.router';

import {InicioComponent} from './incio/incio.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './users/newUser.component';
import { PerfilUserComponent } from './users/perfilUser.component';
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NewUserComponent,
    PerfilUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouter,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
