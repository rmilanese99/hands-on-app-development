import { TestBed } from '@angular/core/testing';

import { StubPokemonService } from './stub-pokemon.service';

describe('StubPokemonService', () => {
  let service: StubPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StubPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
