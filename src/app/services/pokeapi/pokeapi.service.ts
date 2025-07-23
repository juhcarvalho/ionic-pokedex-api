import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(public http: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getPokedex() {

    return new Promise((resolve, reject) => {

      this.http.get("https://pokeapi.co/api/v2/pokedex/2").subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })

    });

  }

  /**
   * 
   * @param pokemonId 
   * @returns 
   */
  getPokemon(pokemonId: string) {

    return new Promise((resolve, reject) => {

      this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })

    });

  }

  getTypes() {
    return new Promise((resolve, reject) => {
      this.http.get("https://pokeapi.co/api/v2/type").subscribe((data: any) => {
        data.results.forEach((type: any) => {
        type.id = this.getTypeIdFromUrl(type.url);
        type.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iv/heartgold-soulsilver/${type.id}.png`; // Adiciona a imagem do tipo
      });
      console.log("Types: ", data.results);
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })

    });
  }

  getTypeInfo(typeId: string) {
    return new Promise((resolve, reject) => {

      this.http.get(`https://pokeapi.co/api/v2/type/${typeId}`).subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })

    });
  }

  getTypeIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2]; // o penúltimo elemento é o nome do tipo
  }

}
