import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemonId: string = '';
  pokemon: any = { types: [] };

  constructor(private activatedRoute: ActivatedRoute,
              private pokeapiService: PokeapiService,
              private navCtrl: NavController) { }

  ngOnInit() {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonId = id;
      this.pokeapiService.getPokemon(this.pokemonId).then((pokemon: any) => {
        this.pokemon = pokemon;
      });
    } else {
      this.navCtrl.navigateBack('/pokedex');
      this.pokemonId = '';
      return;
    }
  }
}
