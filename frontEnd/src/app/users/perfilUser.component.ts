import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
   selector: 'perfil',
   templateUrl: './perfilUser.component.html'
})
export class PerfilUserComponent implements OnInit{
   username: String;
   user: any;
   addFnd: boolean;

   constructor(
      private service: UserService, 
      private router: Router,
      private route: ActivatedRoute
   ) {}
   ngOnInit(){
      this.route.params.subscribe(params => {
         this.username = params['username'];
      });
      this.cargarComponent();
   }
   cargarComponent(){
      this.service.getUser(this.username).then(res => {this.user = res});
      this.addFnd= false;
   }
   addFriend(){
      this.addFnd = true;
      
   }
   added(b: boolean){
      this.addFnd = false;
      if(b){
         this.cargarComponent();
      }      
   }
}