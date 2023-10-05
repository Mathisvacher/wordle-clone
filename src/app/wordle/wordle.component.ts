import { Component } from '@angular/core';
import { Letter } from '../models/letter.model';

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.css'],
})
export class WordleComponent {
  word: Letter[] = [];

  userClickVirtualKeyboard(value: Letter): void {
    this.word.push(value);
  }
}
