import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList: any;
  filteredList: any;
  pokemonsTypes: any;

  constructor(
    private http: HttpClient,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPokemonList();
  }
  
  getPokemonList(): void {
    this.pokemonService.getPokemonsList()
      .subscribe(data => {
        this.pokemonList = data.results.map((pokemonData: any) => {
          return {
            name: pokemonData.name,
            url: pokemonData.url,
            type: []
          };
        });
        this.pokemonList.forEach((pokemon: any) => {
          this.pokemonService.getPokemon(pokemon.url)
            .subscribe(pokemonData => {
              pokemonData.types.forEach((typeData: any) => {
                pokemon.type.push(typeData.type.name);
              });
            });
        });
        this.filteredList = this.pokemonList;
      });
  }

  goToDetail(name: string) {
    this.router.navigate(['/pokemon', name]);
  }

  getPokemonImg(url: string) {
    const parts = url.split('/');
    const finalValue = parts[parts.length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${finalValue}.png`
  }

  filter(filterValue: string) {
    this.pokemonList = this.filteredList.filter((x: any) => x.name.includes(filterValue.toLowerCase()))
  }

  changeTypeColor(type: string) {
    let color: string = '';
    switch (type) {
      case 'normal':
        color = '#A8A77A';
        break;
      case 'fire':
        color = '#EE8130';
        break;
      case 'water':
        color = '#6390F0';
        break;
      case 'electric':
        color = '#F7D02C';
        break;
      case 'grass':
        color = '#7AC74C';
        break;
      case 'ice':
        color = '#96D9D6';
        break;
      case 'fighting':
        color = '#C22E28';
        break;
      case 'poison':
        color = '#A33EA1';
        break;
      case 'ground':
        color = '#E2BF65';
        break;
      case 'flying':
        color = '#A98FF3';
        break;
      case 'psychic':
        color = '#F95587';
        break;
      case 'bug':
        color = '#A6B91A';
        break;
      case 'rock':
        color = '#B6A136';
        break;
      case 'ghost':
        color = '#735797';
        break;
      case 'dragon':
        color = '#6F35FC';
        break;
      case 'dark':
        color = '#705746';
        break;
      case 'steel':
        color = '#B7B7CE';
        break;
      case 'fairy':
        color = '#D685AD';
        break;
    }
    return color;
  }

}
