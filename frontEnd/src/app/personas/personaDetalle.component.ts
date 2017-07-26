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

   
   @Output() onAdd= new EventEmitter<boolean>();
   added= false;

   constructor(private service: PersonaService, private router: Router) { }

  ngOnInit() {
    this.cargarAmigo();
  }

  cargarAmigo(){
    this.service.getPersona(this.idf).then(res => {
        this.amigo = res;
        console.log(this.amigo);
    })
  }
  agregarAmigo(add: boolean){
    /*this.service.setAmigo(this.id, this.idf).then(res =>{           this.persona = res;
      this.onAdd.emit(add);
      this.added= true;
    });*/
    let i = true;
    console.log('agregarAmigo', true)
    this.onAdd.emit(i);
    
  }
  buscarUser(){
    this.service.getUser(this.persona._id).then(res => {
      console.log(res)
    })
  }
}