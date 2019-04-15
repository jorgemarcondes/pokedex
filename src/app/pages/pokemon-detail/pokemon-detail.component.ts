import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../models/pokemon';
import {PokemonService} from '../../services/pokemon.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loadData(params.get('id'));
    });
  }

  loadData(name: string) {
    this.pokemonService.getPokemon(name).subscribe((data: Pokemon) => this.pokemon = data);
  }

}
