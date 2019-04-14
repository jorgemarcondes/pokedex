import {Component, OnInit} from '@angular/core';
import {PokemonService} from './services/pokemon.service';
import {Pokemon} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pokedex';
  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(1).subscribe((pokemon: Pokemon) => this.pokemon = {... pokemon});
  }

}
