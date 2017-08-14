import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
   selector: 'inicio',
   templateUrl: './inicio.component.html',
   styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
   constructor(private router: Router) { }

   ngOnInit() { }
   new(){
      this.router.navigate(['/newUser']);
   }
}