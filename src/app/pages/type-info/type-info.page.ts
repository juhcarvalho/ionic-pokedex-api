import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-type-info',
  templateUrl: './type-info.page.html',
  styleUrls: ['./type-info.page.scss'],
})
export class TypeInfoPage implements OnInit {
  typeId: string = '';
  type: any = { name: '', imageUrl: '', damage_relations: {} };

  constructor(private activatedRoute: ActivatedRoute,
                private pokeapiService: PokeapiService,
                private navCtrl: NavController) { }
  
    ngOnInit() {
      var id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        this.typeId = id;
        this.pokeapiService.getTypeInfo(this.typeId).then((type: any) => {
          this.type.name = type.name;
          this.type.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/${type.id}.png`; // Adiciona a imagem do tipo
          this.type.damage_relations = type.damage_relations;

          console.log("getTypeInfo: ", this.type);
        });
      } else {
        this.navCtrl.navigateBack('/pokedex');
        this.typeId = '';
        return;
      }
    }

    getImageUrl(url: string): string {
      const parts = url.split('/');
      var id = parts[parts.length - 2];
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/${id}.png`;
    }
}
