import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Letter } from '../models/letter.model';
import { Game } from '../models/game.model';
import { LETTER_STATUS } from '../enums/letterState.enum';
import { GameService } from '../services/game-service.service';

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.css'],
})
export class WordleComponent {
  wordToFind!: string;
  word: Letter[] = [];

  game!: Game;

  constructor(private gameService: GameService) {}

  @ViewChild('wordleKeyboardEvent') wordleKeyboardEvent!: ElementRef;

  ngAfterViewInit() {
    this.wordleKeyboardEvent.nativeElement.focus();
  }

  ngOnInit() {
    this.wordToFind = 'poire';
    this.initGame();
  }

  private initGame(): void {
    this.game = {
      date: new Date(),
      words: this.gameService.getEmptyGameArray(),
      wordToFine: this.wordToFind,
      success: false,
    };
  }

  userClickVirtualKeyboard(value: Letter): void {
    if (this.word.length < 5) {
      this.word.push(value);
      this.gameService.updateGameAddLetter(this.game, value);
    }
  }

  private checkWord() {
    if (this.word.length === 5) {
      if (this.letterArrayToString(this.word) === this.wordToFind) {
        console.log('victory :D');
      } else {
        this.gameService.goToNextWord();
        this.word = [];
      }
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
    this.checkWord();
  }

  userClickVirtualKeyboardDelete(): void {
    this.word.pop();
    this.gameService.updateGameRemoveLetter(this.game);
  }

  keyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.word.length === 5) {
      this.checkWord();
    }
    if (event.key === 'Backspace') {
      this.word.pop();
      this.gameService.updateGameRemoveLetter(this.game);
    }
    if (event.keyCode >= 65 && event.keyCode <= 90 && this.word.length < 5) {
      let l: Letter = { value: event.key, status: LETTER_STATUS.NONE };
      this.gameService.updateGameAddLetter(this.game, l);
      this.word.push(l);
    }
  }
}
