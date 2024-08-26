import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
// creamos propiedades
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  ChangenHero():void{
    this.name = 'Spiderman';
  }

  ChangeAge():void{
    this.age = 30;
  }

  resetForm():void{
    this.name = 'iroman';
    this.age = 45;
  }
}
