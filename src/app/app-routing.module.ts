import { SessionGuard } from './core/guards/session.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  // ruta para la pagina de autentificacion cargando de forma peresos el modulo AuthModule en forma de promesa
  {path:'auth', loadChildren: () => import ('./modules/auth/auth.module').then(m => m.AuthModule)},

  // ruta asociada al componente HomePageComponent para utilizar como pagina principal, cargando de forma peresosa el Homemodule
  {path:'', component: HomePageComponent, // Esta ruta es privada
  loadChildren: () => import ('./modules/home/home.module').then(m => m.HomeModule),
  canActivate:[SessionGuard] } //Agregamos el session guard para restringir la ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
