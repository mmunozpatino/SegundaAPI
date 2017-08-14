import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../services/user.service';

@Component({
   selector: 'log',
   templateUrl: './log.component.html',
   styleUrls: ['./log.component.css']
})

export class LogComponent implements OnInit{
   title = 'logIn';
   username: String;
   pass: String;
   users: any;
   isLog: boolean;
   change: boolean;
   
   constructor(private service: UserService, private router: Router){}
   
   ngOnInit() { }
   logIn(event){
      if(event.keyCode == 13 ){this.service.getUser(this.username).then(resp => {this.users = resp;                                 
                                                         this.checkPass(this.users);});}
      
   }
   checkPass(usr: any){
      if(this.pass != usr.password){
         alert('contraseña invalida');
      }else{
         this.isLog = true;
         this.router.navigate(['/perfil', usr.username]);
      }
   }
   logOut(){
      this.isLog = false;
      this.router.navigate(['']);
      this.change = false;
      this.username = '';
      this.pass = '';
   }
   Change(event){
      if(event.keyCode == 13){
         this.change = true;
      }
   }

}