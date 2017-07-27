import { Component, OnInit } from '@angular/core';

import { MascotaService } from '../services/mascota.service'

@Component({
   selector: 'new-mascota',
   templateUrl: './newMascota.component.html'
})
export class NewMascotaComponent implements OnInit {
   mascota: any;
   respuesta: any;
   constructor(private service: MascotaService) {
      this.mascota = {
         nombre: '',
         raza: '',
         especie: ''
      }
    }

   ngOnInit() { }

   add(){
      this.service.addNew(this.mascota).then(res =>{
         this.respuesta = res;
         console.log(this.respuesta);
      })
   }
}