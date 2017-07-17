import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRouter } from './app.router';

import {InicioComponent} from './incio/incio.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './users/newUser.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRouter
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }