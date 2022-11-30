import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

const routes: Routes = [
  { path: '', component: FavoritePageComponent, outlet:'child' } //se va a redimencionar dentro del router-outlet llamado "child"
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
