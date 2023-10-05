import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Letter } from 'src/app/models/letter.model';

@Component({
  selector: 'app-wordle-keyboard-letter',
  templateUrl: './wordle-keyboard-letter.component.html',
  styleUrls: ['./wordle-keyboard-letter.component.css'],
})
export class WordleKeyboardLetterComponent {
  @Output() userInput = new EventEmitter<Letter>();

  @Input()
  letter!: Letter;

  clickKeyboard() {
    this.userInput.emit(this.letter);
  }
}
