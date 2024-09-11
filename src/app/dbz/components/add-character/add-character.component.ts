import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  //= new EventEmitter();

  // constructor() {
  //   this.onNewCharacter = new EventEmitter();

  // }

  // public name: string = '';

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {
    console.log(this.character);
    if ( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
    //this.character.name = '';
    //this.character.power = 0;
  }


  // exampleCancel():void {
  //   console.log('cancelando')
  // }
}
