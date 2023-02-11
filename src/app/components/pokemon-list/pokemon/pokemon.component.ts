import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() pokemons = [];
  @Input() pokemonNumber: number = 0;

  getPokemonNumberCard() {
    const number = this.pokemonNumber;
    let formatedNumber = number.toString().padStart(3, '0');

    return `../../../assets/images/pokemon-card/${formatedNumber}.webp`;
  }
}
