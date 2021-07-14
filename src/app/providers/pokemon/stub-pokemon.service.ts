import {Injectable} from '@angular/core';

import { Pokemon } from '../../models/pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class StubPokemonService {

  private pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      description: 'Fin dalla nascita questo Pokémon ha sulla schiena un seme che cresce lentamente',
      type: ['Erba', 'Veleno'],
      stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    },
    {
      id: 4,
      name: 'Charmander',
      description: 'Ama le cose calde. Si dice che quando piove gli esca vapore dalla punta della coda',
      type: ['Fuoco'],
      stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },
    {
      id: 7,
      name: 'Squirtle',
      description: 'Quando ritrae il lungo collo dentro la corazza sputa un vigoroso getto d\'acqua',
      type: ['Acqua'],
      stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
    },
    {
      id: 19,
      name: 'Rattata',
      description: 'Con i suoi incisivi rode qualsiasi cosa. Se se ne avvista uno, è probabile che in zona vivano ' +
        'almeno 40 esemplari',
      type: ['Normale'],
      stats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png'
    },
    {
      id: 25,
      name: 'Pikachu',
      description: 'Più potente è l\'energia elettrica prodotta dal Pokémon, più le sacche sulle sue guance sono ' +
        'morbide ed elastiche',
      type: ['Elettro'],
      stats: { hp: 35, attack: 35, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    },
    {
      id: 39,
      name: 'Jigglypuff',
      description: 'Dotato di una capacità polmonare fra le migliori nel mondo Pokémon, canta una ninnananna finché ' +
        'il suo avversario non s\'addormenta',
      type: ['Normale', 'Folletto'],
      stats: { hp: 115, attack: 45, defense: 20, specialAttack: 45, specialDefense: 25, speed: 20},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png'
    },
    {
      id: 52,
      name: 'Meowth',
      description: 'Ama raccogliere oggetti luccicanti. Quando è di buon umore mostra la sua collezione anche al ' +
        'suo Allenatore',
      type: ['Normale'],
      stats: { hp: 40, attack: 45, defense: 35, specialAttack: 40, specialDefense: 40, speed: 90},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
    },
    {
      id: 124,
      name: 'Jynx',
      description: 'In una certa zona di Galar, Jynx era temuto e venerato dagli abitanti, che lo chiamavano ' +
        '“Regina dei ghiacci”',
      type: ['Ghiaccio', 'Psico'],
      stats: { hp: 65, attack: 50, defense: 35, specialAttack: 115, specialDefense: 95, speed: 95},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png'
    },
    {
      id: 143,
      name: 'Snorlax',
      description: 'Dopo aver trangugiato i suoi immancabili 400 kg di cibo quotidiani, cade in un sonno profondo',
      type: ['Normale'],
      stats: { hp: 160, attack: 110, defense: 65, specialAttack: 65, specialDefense: 110, speed: 30},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
    },
    {
      id: 816,
      name: 'Sobble',
      description: 'Se si spaventa, produce lacrime con un fattore lacrimogeno cento volte più potente di quello di ' +
        'una cipolla per far piangere anche i nemici',
      type: ['Acqua'],
      stats: { hp: 50, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 70},
      avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png'
    }
  ];

  constructor() {
  }

  getPokemons() {
    return this.pokemons;
  }

  getPokemon(id: number) {
    return this.pokemons.find(p => p.id === id);
  }
}
