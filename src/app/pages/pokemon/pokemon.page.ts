import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
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
              private router: Router,
              private navCtrl: NavController) { }

  ngOnInit() {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonId = id;
      this.pokeapiService.getPokemon(this.pokemonId).then((pokemon: any) => {
        this.pokemon = pokemon;
        this.pokemon.types.forEach((type: any) => {
          type.type.id = this.pokeapiService.getTypeIdFromUrl(type.type.url);
          type.type.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/${type.type.id}.png`; // Adiciona a imagem do tipo
        });
        console.log("Pokemon: ", this.pokemon);
      });
    } else {
      this.navCtrl.navigateBack('/pokedex');
      this.pokemonId = '';
      return;
    }
  }

  goToType(typeId: string) {
    this.router.navigate([`/type-info/${typeId}`]);
  } 
}
