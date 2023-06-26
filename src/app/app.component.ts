import { Component } from "@angular/core";
import { POKEMONS } from "./pokemon/mock-pokemons-list";
import { Pokemon } from "./pokemon/pokemon";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  pokemonList: Pokemon[] = POKEMONS;
}
