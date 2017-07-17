import {Component} from '@angular/core';

import { UserService } from '../services/user.service'; 

@Component({
   selector: 'new-user',
   templateUrl: './newUser.component.html'
})
export class NewUserComponent {
   nombre: String;
   apellido: String;
   dni: Number;
   username: String;
   pass: String;
   user: any;

   constructor(private service: UserService){
      this.user = {
         'nombre' : '',
         'apellido': '',
         'dni': '',
         'username': '',
         'password': ''
      }
   }
   
   logUp(){
      console.log(this.user);
      this.service.addUser(this.user).then(res => {this.user = res;
                                             console.log(this.user);})
   }
}