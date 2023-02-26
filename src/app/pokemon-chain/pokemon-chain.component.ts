import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-chain',
  templateUrl: './pokemon-chain.component.html',
  styleUrls: ['./pokemon-chain.component.scss']
})
export class PokemonChainComponent {
  activePokemon: any;
  pokemonName: string = '';
  evolutionChain: any;
  firstPokemonName: string = '';
  firstPokemonUrl: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pokemonName = params['name'];
    });

    this.pokemonService.getPokemonSpecie(this.pokemonName).
      subscribe(data => {
        this.pokemonService.getPokemonChain(data['evolution_chain'].url).
          subscribe(res => {
            this.firstPokemonName = res.chain.species.name;
            this.firstPokemonUrl = res.chain.species.url;
            this.evolutionChain = res.chain;
          });
      });
  }

  toHome() {
    this.router.navigate(['']);
  }

  getPokemonImg(url: string) {
    const parts = url.split('/');
    const finalValue = parts[parts.length - 2];
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${finalValue}.png`
  }

}
