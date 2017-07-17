import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { InicioComponent } from './incio/incio.component';
import { NewUserComponent } from './users/newUser.component';
import { PerfilUserComponent } from './users/perfilUser.component';


const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'newUser', component: NewUserComponent },
   { path: 'perfil', component: PerfilUserComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRouter {}
