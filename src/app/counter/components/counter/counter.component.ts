import { Component } from "@angular/core";

 //es un decorador q transforma la clase en un componente
@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}} </h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `

})
export class CounterComponent {
 public counter: number = 10;

 //creamos métodos botones
 increaseBy( value: number): void {
  this.counter += value;
 }

 //métoso reset boton
 resetCounter(){
  this.counter = 10;

 }
  }
