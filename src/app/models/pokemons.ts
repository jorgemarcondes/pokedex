import {Pokemon} from './pokemon';

export interface Pokemons {
  count: number;
  next: string;
  previous: string;
  results: PokemonInfo[];
}

export interface PokemonInfo {
  name: string;
  url: string;
  pokemon: Pokemon;
  over: boolean;
}
