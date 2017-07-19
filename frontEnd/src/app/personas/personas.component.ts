import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'personas',
   templateUrl: './personas.component.html'
})
export class PersonasComponent implements OnInit {
   //hacerlo como cartel sobre el perfil
   @Input() id: String;
   constructor() { }
   ngOnInit() { }
}