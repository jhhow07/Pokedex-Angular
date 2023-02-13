import { Component } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
  }

  ngOnInit() {
  }
}
