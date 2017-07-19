import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'personaDetalle',
   templateUrl: './personaDetalle.component.html'
})
export class PersonaDetalleComponent implements OnInit {
   @Input() id: String;
   @Input() idf: String;
   constructor() { }

   ngOnInit() { }
}