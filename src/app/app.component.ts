import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Pokedex', url: '/pokedex', icon: 'planet' },
    { title: 'Types Pokemon', url: '/type', icon: 'planet' }
  ];

  constructor() {}

}
