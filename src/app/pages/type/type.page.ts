import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {
  typeId: string = '';
  typeList: any[] = [];

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit() {
    this.getAllTypes();
  }

  getAllTypes() {
    this.pokeapiService.getTypes().then((data: any) => {
      console.log("Types: ", data.results);
      this.typeList = data.results;
    }).catch((err: any) => {
      console.error("Error fetching types: ", err);
    });
  }


  getTypeInfo(typeId: string) {
    this.pokeapiService.getTypeInfo(typeId).then((data: any) => {
      console.log("Type Info: ", data.damage_relations);
      // Aqui você pode fazer algo com os dados do tipo, como exibir em um modal ou página de detalhes
    }).catch((err: any) => {
      console.error("Error fetching type info: ", err);
    });
  }

}
