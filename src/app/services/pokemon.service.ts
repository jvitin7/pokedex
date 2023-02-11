import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = []

  constructor(private httpClient: HttpClient) {
    this.loadPokemons();
  }

  async loadPokemons() {
    const requisition = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

    const result = await requisition.json()

    this.pokemons = result.results;
    
  }
}
