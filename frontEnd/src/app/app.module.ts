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
import { PersonasComponent } from './personas/personas.component';
import { PersonaDetalleComponent } from './personas/personaDetalle.component'

import { NewMascotaComponent } from './mascota/newMascota.component';
import { MascotaService } from './services/mascota.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NewUserComponent,
    PerfilUserComponent,
    PersonasComponent,
    PersonaDetalleComponent,
    NewMascotaComponent
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
    PersonaService,
    MascotaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
