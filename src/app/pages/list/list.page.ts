import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../../models/pokemon/pokemon';
import { StubPokemonService } from '../../providers/pokemon/stub-pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  search: boolean;

  private pokemons: Pokemon[];

  constructor(private router: Router, private stubService: StubPokemonService) {
    this.search = false;

    this.pokemons = this.stubService.getPokemons();
  }

  ngOnInit() {
  }

  filterList(event: any) {
    const query = event.target.value;

    this.pokemons = this.stubService.getPokemons().filter(p => p.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

  getList() {
    return this.pokemons;
  }

  refreshList(event: any) {
    this.pokemons = this.stubService.getPokemons();

    event.target.complete();
  }
}
