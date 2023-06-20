import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  template: `<h1>Liste des Pokémons</h1>`,
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
