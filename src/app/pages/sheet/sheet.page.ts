import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from '../../models/pokemon/pokemon';
import { StubPokemonService } from '../../providers/pokemon/stub-pokemon.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.page.html',
  styleUrls: ['./sheet.page.scss'],
})
export class SheetPage implements OnInit {

  pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private router: Router, private stubService: StubPokemonService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pokemon = this.stubService.getPokemon(+params.id);
    });

    if (!this.pokemon) {
      this.router.navigate(['/not-found'])
        .then(() => {
        });
    }
  }

}
