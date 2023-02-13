import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  pokemonList: any;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.getPokemonList();
  }

  // getPokemonChain(pokemonName: string) {
  //   this.pokemonService.getPokemonChain(pokemonName).
  //   subscribe(data => {
  //     console.log(data);
  //   });
  // }

  getPokemonList():void {
    this.pokemonService.getPokemonsList().
    subscribe(data=> {
      this.pokemonList = data.results;
    });
  }

  getPokemonName(name: string) {
    return name;
    // this.pokemonService.getPokemonChain(name).
    // subscribe(data => {
    //   console.log(data);
    // });
  }

}
