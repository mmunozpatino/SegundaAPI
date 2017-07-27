import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PersonaService } from '../services/persona.service'
import { Router } from "@angular/router";
import { PerfilUserComponent } from '../users/perfilUser.component'

@Component({
   selector: 'personaDetalle',
   templateUrl: './personaDetalle.component.html'
})
export class PersonaDetalleComponent implements OnInit {
   @Input() id: String;
   @Input() idf: String;
   amigo: any;
   persona: any;
   perfil: PerfilUserComponent;

   
   @Output() added = new EventEmitter<boolean>();

   constructor(private service: PersonaService, private router: Router) { }

   OnInit(){
     this.added.emit(true);
   }
  agregarAmigo(add: boolean){
    this.service.setAmigo(this.id, this.idf).then(res =>{           this.persona = res;
      this.added.emit(add);
    });
    
  }

  ngOnInit() {
    this.cargarAmigo();
  }

  cargarAmigo(){
    this.service.getPersona(this.idf).then(res => {
        this.amigo = res;
        console.log(this.amigo);
    })
  }
  
  buscarUser(){
    this.service.getUser(this.persona._id).then(res => {
      console.log(res)
    })
  }
}