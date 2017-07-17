import {Component} from '@angular/core';

import {UserService} from '../services/user.service';

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
      this.service.getUser(this.username).then(resp => {this.users = resp;
                                             if(this.users == null){
                                                alert('usuario incorrecto')
                                             }else{
                                                this.checkPass(this.users);
                                             }});
      
   }
   checkPass(usr: any){
      if(this.pass != usr.password){
         alert('contraseña invalida');
      }else{
         alert('contraseña valida!');
      }
   }
}