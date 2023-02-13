import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonChainComponent } from './pokemon-chain/pokemon-chain.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: '', component: PokemonListComponent},
  { path: 'pokemon/:name', component: PokemonChainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
