import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import {PokemonDetailComponent} from './pages/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
