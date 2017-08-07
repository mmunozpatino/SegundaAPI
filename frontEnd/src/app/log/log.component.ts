import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../services/user.service';

@Component({
   selector: 'log',
   templateUrl: './log.component.html',
   styleUrls: ['./log.component.css']
})

export class LogComponent{
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
         this.router.navigate(['/perfil', usr.username]);
      }
   }
}