import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MascotaService } from '../services/mascota.service'

@Component({
   selector: 'new-mascota',
   templateUrl: './newMascota.component.html'
})
export class NewMascotaComponent implements OnInit {
   mascota: any;
   respuesta: any;
   especies: any;
   @Output() added= new EventEmitter<boolean>();
   @Input() dueño: any;

    constructor(private service: MascotaService) {
      this.mascota = {
         id: '',
         nombre: '',
         raza: '',
         especie: ''
      }
    }

   ngOnInit() { 
     this.mascota.id = this.dueño._id;
     this.getEspecies();
   }

   add(){
      this.service.addNew(this.mascota).then(res =>{
         this.respuesta = res;
         console.log(this.respuesta);
         this.added.emit(true);
      })
   }
    getEspecies(){
      //console.log(this.service.getEspecies());
      this.service.getEspecies().then(res=> {
        this.especies = res;
      });
    }
}