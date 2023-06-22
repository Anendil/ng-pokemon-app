import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons-list";
import { Pokemon } from "./pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: String) {
    this.pokemonSelected = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (this.pokemonSelected) {
      console.log(`Vous avez demandé le pokémon ${this.pokemonSelected.name}`);
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas !`);
    }
  }
}
