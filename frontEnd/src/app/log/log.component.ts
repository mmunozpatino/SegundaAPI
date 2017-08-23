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
   plchusr: String;
   plchpss: String;
   
   constructor(private service: UserService, private router: Router){}
   
   ngOnInit() {
      this.plchusr = 'Username';
      this.plchpss = 'Password';
      this.username = '';
      this.pass = ''; 
    }
   checkkey(event){
      if(event.keyCode == 13 ){
      this.logIn()}
   }

   logIn(){
      if(this.pass == '' || this.username == ''){
         alert('Complete los datos!');
      }else{
         this.service.getUser(this.username).then(resp => {this.users = resp;                                 
                                                         this.             checkPass(this.users);});
      }
      
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
   changeplchldusr(){
      if(this.plchusr == ''){
         this.plchusr = 'Username'
      }else{
         this.plchusr = '';
      }
   }
   changeplcpss(){
      if(this.plchpss == ''){
         this.plchpss = 'Password'
      }else{
         this.plchpss = '';
      }
   }
   new(){
      this.router.navigate(['/newUser']);
   }

}