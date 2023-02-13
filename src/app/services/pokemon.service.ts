import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/';
  pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0";
  getPokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
  
  constructor(private httpClient: HttpClient) { }

  getPokemonSpecie(pokemonName: string) {
    return this.httpClient.get<any>(`${this.speciesUrl}${pokemonName}`);
  }

  getPokemonsList() {
    return this.httpClient.get<any>(this.pokemonListUrl);
  }

  getPokemonChain(specieUrl: string) {
    return this.httpClient.get<any>(specieUrl);
  }

  // getPokemon(name: string) {
  //   return this.httpClient.get<any>(`${this.getPokemonUrl}${name}`);
  // }
}
