import {Component} from '@angular/core';

import {UserService} from '../services/user.service';
import { User } from "app/classes/user.class";

@Component({
   selector: 'inicio',
   templateUrl: './inicio.component.html'
})

export class InicioComponent{
   title = 'logIn';
   username: String;
   pass: String;
   users: any;
   
   constructor(private service: UserService){}
   logIn(){
      this.service.get().then(resp => {this.users = resp;
                              console.log(this.users)});
      
   }
}