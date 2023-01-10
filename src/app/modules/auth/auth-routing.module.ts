import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {path:'login', component: AuthPageComponent},
  {path:'**', redirectTo: '/auth/login'} //redireccion a ogin si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
