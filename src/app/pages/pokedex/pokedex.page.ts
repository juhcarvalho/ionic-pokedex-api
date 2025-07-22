import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss']
})
export class PokedexPage implements OnInit {

  pokedex: any = [];
  query: string = '';
  
  constructor(private pokeapiService: PokeapiService,
              public router: Router) {
    this.getAll();
   }

   getAll() {
    this.pokeapiService.getPokedex().then((data: any) => {
      this.pokedex = data.pokemon_entries;
    });
  }

  ngOnInit() {
  }

  getById(pokemonId: string) {
    console.log("pokemon ", pokemonId);
    this.router.navigate([`pokemon/${pokemonId}`]);
  }

}
