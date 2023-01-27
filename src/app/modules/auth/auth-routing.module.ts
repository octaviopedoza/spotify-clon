import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {path:'login', component: AuthPageComponent}, //ruta para acceder al login
  {path:'**', redirectTo: '/auth/login'} //redireccion a login si la ruta no existe (sirve para rutas 404)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
