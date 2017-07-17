import { Component, Input } from '@angular/core';

@Component({
   selector: 'perfil',
   templateUrl: './perfilUser.component.html'
})
export class PerfilUserComponent{
   @Input() id: String;
   constructor() { }
}