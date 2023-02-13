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
  constructor(
    private http: HttpClient,
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.pokemonService.getPokemonsList().
      subscribe(data => {
        this.pokemonList = data.results;
        this.filteredList = data.results;
      });
  }

  getPokemonType() {
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

}
