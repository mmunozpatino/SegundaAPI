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
   constructor(private service: UserService){}
   
   logUp(){
      let user ={
         'nombre' : this.nombre,
         'apellido': this.apellido,
         'dni': this.dni,
         'username': this.username,
         'password': this.pass
      }
      console.log(user);
      this.service.addUser(user).then(res => {this.user = res;
                                             console.log(this.user);})
   }
}