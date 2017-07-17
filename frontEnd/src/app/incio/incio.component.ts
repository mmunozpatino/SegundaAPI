import {Component} from '@angular/core';
import {Router} from '@angular/router';

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
   
   constructor(private service: UserService, private router: Router){}
   logIn(){
      this.service.getUser(this.username).then(resp => {this.users = resp;                                 
                                                         this.checkPass(this.users);});
      
   }
   checkPass(usr: any){
      if(this.pass != usr.password){
         alert('contraseña invalida');
      }else{
         console.log(usr._id)
         this.router.navigate(['/perfil', usr._id]);
      }
   }
}