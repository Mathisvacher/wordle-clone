import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Letter } from '../models/letter.model';
import { Game } from '../models/game.model';
import { LETTER_STATUS } from '../enums/letterState.enum';
import { GameService } from '../services/game-service.service';
import { AlphabetService } from '../services/alphabet-service.service';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.css'],
})
export class WordleComponent {
  wordToFind!: string;
  word: Letter[] = [];
  gameOver: Boolean = false;

  helpPopup: Boolean = false;
  settingsPopup: Boolean = false;
  archivePopup: Boolean = false;
  statPopup: Boolean = false;

  game!: Game;

  constructor(
    private gameService: GameService,
    private alphabetService: AlphabetService,
    private wordService: WordService
  ) {}

  @ViewChild('wordleKeyboardEvent') wordleKeyboardEvent!: ElementRef;

  ngAfterViewInit() {
    this.wordleKeyboardEvent.nativeElement.focus();
  }

  ngOnInit() {
    this.initGame();
  }

  private initGame(): void {
    const data = this.wordService.getOneWord();
    this.wordToFind = data;
    this.game = {
      date: new Date(),
      words: this.gameService.getEmptyGameArray(),
      wordToFine: data,
      success: false,
    };
  }

  userClickVirtualKeyboard(l: Letter): void {
    if (this.word.length < 5) {
      this.addLetter(l.value);
    }
  }

  private checkWord() {
    if (this.word.length === 5) {
      if (this.letterArrayToString(this.word) === this.wordToFind) {
        this.gameService.checkWord(this.game, this.wordToFind);
        this.gameOver = true;
      } else {
        this.gameService.checkWord(this.game, this.wordToFind);
        this.alphabetService.updateVirtualKeybord(this.word);
        this.gameService.goToNextWord(this.game);
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
    this.removeLetter();
  }

  keyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.word.length === 5) {
      this.checkWord();
    }
    if (event.key === 'Backspace') {
      this.removeLetter();
    }
    if (event.keyCode >= 65 && event.keyCode <= 90 && this.word.length < 5) {
      this.addLetter(event.key);
    }
  }

  private addLetter(value: string): void {
    let l: Letter = { value: value, status: LETTER_STATUS.ANY };
    this.gameService.updateGameAddLetter(this.game, l);
    this.word.push(l);
  }

  private removeLetter(): void {
    this.word.pop();
    this.gameService.updateGameRemoveLetter(this.game);
  }

  closePopup() {
    this.gameOver = false;
    this.archivePopup = false;
    this.helpPopup = false;
    this.settingsPopup = false;
    this.statPopup = false;
  }

  openArchive() {
    this.archivePopup = true;
  }

  openHelp() {
    this.helpPopup = true;
  }

  openStat() {
    this.statPopup = true;
  }

  openSettings() {
    this.settingsPopup = true;
  }

  changeKeyboardType() {
    console.log('toto');
    //this.alphabetService.changeKeyboardType();
  }
}
