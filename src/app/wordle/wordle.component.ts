import { Component, OnInit } from '@angular/core';
import { Letter } from '../models/letter.model';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.css'],
})
export class WordleComponent {
  wordToFind!: string;
  word: Letter[] = [];

  game!: Game;

  ngOnInit() {
    this.wordToFind = 'poire';
    this.initGame();
  }

  private initGame(): void {
    this.game = {
      date: new Date(),
      words: [],
      wordToFine: this.wordToFind,
      success: false,
    };
  }

  userClickVirtualKeyboard(value: Letter): void {
    if (this.word.length < 5) this.word.push(value);
  }

  private checkWord() {
    if (this.letterArrayToString(this.word) === this.wordToFind) {
      console.log('victory :D');
    } else {
      console.log('he non :/');
    }
  }

  private letterArrayToString(letterArray: Letter[]) {
    let resultString = '';

    for (const letter of letterArray) {
      resultString += letter.value;
    }
    return resultString;
  }

  userClickVirtualKeyboardReturn(): void {
    if (this.word.length === 5) this.checkWord();
  }

  userClickVirtualKeyboardDelete(): void {
    this.word.pop();
  }
}
