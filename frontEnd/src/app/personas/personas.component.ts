import { Component, OnInit, Input } from '@angular/core';

import { PersonaService } from '../services/persona.service';

@Component({
   selector: 'personas',
   templateUrl: './personas.component.html'
})
export class PersonasComponent implements OnInit {
   //hacerlo como cartel sobre el perfil
   @Input() id;
   personas: any[];
   personasID: String[] = [];
   amigos: String[];
   personaDetalle: boolean;
   idf: String;

   constructor(private service: PersonaService) { }
   ngOnInit() {
      this.cargarPersonas();
   }
   cargarPersonas(){
      this.service.getAll().then(res => {
         for(let i of res){
            this.personasID.push(i._id);
         };
         this.personas = res;
         console.log(this.personasID)
         this.cargarAmigos();
      });
   }
   cargarAmigos(){
      this.service.getPersona(this.id).then(res => {
         this.amigos = res.amigos;
         console.log(this.amigos);
         this.filtrarAmigos();
      });      
   }

   filtrarAmigos(){
      for(let i of this.personas){
            for(let j of this.amigos){
               if( i._id == j){
                  this.personas.splice(this.personas.indexOf(i), 1);
               }
            }
         }
         console.log('quedo', this.personas);
   }
   showDetail(id: String){
         console.log('detalle')
         this.idf = id;
         this.personaDetalle = true;
   }
}