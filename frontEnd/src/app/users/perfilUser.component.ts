import { Component, Input, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { UserService } from '../services/user.service';
import { PersonaService } from '../services/persona.service';

@Component({
   selector: 'perfil',
   templateUrl: './perfilUser.component.html'
})
export class PerfilUserComponent implements OnInit{
   username: String;
   user: any;
   constructor(
      private service: UserService, 
      private router: Router,
      private route: ActivatedRoute,
      private servicePers : PersonaService
   ) {}
   ngOnInit(){
      this.route.params.subscribe(params => {
         this.username = params['username'];
      });
      this.cargarUser();
   }
   cargarUser(){
      this.service.getUser(this.username).then(res => {this.user = res;
      console.log(this.user)});
   }
}