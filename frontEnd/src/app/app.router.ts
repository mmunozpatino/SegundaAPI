import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioComponent } from './inicio/incio.component';
import { NewUserComponent } from './users/newUser.component';
import { PerfilUserComponent } from './users/perfilUser.component';


const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'newUser', component: NewUserComponent },
   { path: 'perfil/:username', component: PerfilUserComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRouter {}
