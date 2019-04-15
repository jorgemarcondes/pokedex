import { Component, OnInit } from '@angular/core';
import {PokemonInfo, Pokemons} from '../../models/pokemons';
import { PokemonService } from '../../services/pokemon.service';
import {Pokemon} from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemons;
  page: number;
  previousPage: number;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.page = 1;
    this.loadData();
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  loadData() {
    const offset = (this.page - 1) * 24;
    this.pokemonService.getPokemons(offset).subscribe((pokemons: Pokemons) => {
      this.pokemons = pokemons;

      this.pokemons.results.forEach((pokemonInfo) => {
        this.pokemonService.getPokemon(pokemonInfo.name).subscribe((pokemon: Pokemon) => pokemonInfo.pokemon = pokemon);
      });
    });
  }

}
