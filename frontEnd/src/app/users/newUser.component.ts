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
   error: boolean;

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
      this.service.addUser(this.user).then(res => {this.user = res;
                                          console.log(this.user)}).catch(this.handleError);
   }
   verificarRes(user: any){
      if(user.message == 'error'){
         this.error = true;
      }
   }
   handleError(){
      alert('Verificar los datos ingresados');
   }
}