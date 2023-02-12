import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {
  @Input() pokemonName: string = '';
  @Input() pokemonNumber: number = 0;
  

  getPokemonImageCard() {
    const number = this.pokemonNumber;
    let formatedNumber = number.toString().padStart(3, '0');

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatedNumber}.png`;
  }

  getPokemonNumber() {
    const number = this.pokemonNumber;
    let formatedNumber = number.toString().padStart(3, '0');

    return `#${formatedNumber}`;
  }
}
