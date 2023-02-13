import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
  pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0";
  constructor(private httpClient: HttpClient) { }

  getPokemonChain(pokemonName: string) {
    return this.httpClient.get(this.speciesUrl + pokemonName);
  }

  getPokemonsList() {
    return this.httpClient.get<any>(this.pokemonListUrl);
  }
}
