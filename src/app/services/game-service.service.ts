import { Injectable } from '@angular/core';
import { Letter } from '../models/letter.model';
import { LETTER_STATUS } from '../enums/letterState.enum';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private emptyLetter: Letter = { value: '', status: LETTER_STATUS.NONE };
  private nextLetter: Letter = { value: '', status: LETTER_STATUS.NEXT };

  private wordIndex: number = 0;
  private charIndex: number = 0;
  private nbWordMax: number = 6;
  private nbCharMax: number = 5;

  private word1: Letter[] = [
    this.nextLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
  ];

  private word2: Letter[] = [
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
  ];

  private word3: Letter[] = [
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
  ];

  private word4: Letter[] = [
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
  ];

  private word5: Letter[] = [
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
  ];
  private word6: Letter[] = [
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
    this.emptyLetter,
  ];

  private arrayGame: Letter[][] = [
    this.getWord1(),
    this.getWord2(),
    this.getWord3(),
    this.getWord4(),
    this.getWord5(),
    this.getWord6(),
  ];

  //////////////////////
  // GETTER & SETTER //
  /////////////////////

  private getWord1(): Letter[] {
    return this.word1;
  }
  private getWord2(): Letter[] {
    return this.word2;
  }
  private getWord3(): Letter[] {
    return this.word3;
  }
  private getWord4(): Letter[] {
    return this.word4;
  }
  private getWord5(): Letter[] {
    return this.word5;
  }
  private getWord6(): Letter[] {
    return this.word6;
  }

  getEmptyGameArray(): Letter[][] {
    return this.arrayGame;
  }

  /**
   * When : user want to add a letter
   * Then : add a letter to the game
   * @param game : The current game
   * @param letter : The letter to add
   */
  updateGameAddLetter(game: Game, letter: Letter): void {
    if (
      this.charIndex < this.nbCharMax - 1 ||
      this.wordIndex < this.nbWordMax
    ) {
      let word: Letter[] = game.words[this.wordIndex];
      word[this.charIndex] = letter;
      game.words[this.wordIndex] = word;
      this.charIndex++;
      this.addNextLetterVisual(game);
    }
  }

  /**
   * When : checkWord called
   * Then : update index
   */
  goToNextWord(game: Game): void {
    if (this.wordIndex < this.nbWordMax) {
      this.charIndex = 0;
      this.wordIndex++;
      this.addNextLetterVisual(game);
    }
  }

  /**
   * When : "backspace" used
   * Then : remove the last letter added
   * @param game : The current game
   */
  updateGameRemoveLetter(game: Game): void {
    if (this.charIndex !== 0) {
      this.charIndex--;
      let word: Letter[] = game.words[this.wordIndex];
      word[this.charIndex] = this.emptyLetter;
      game.words[this.wordIndex] = word;
      this.removeNextLetterVisual(game);
    }
  }

  /**
   * When : User select a letter
   * Then : Update then the blue tool position
   * @param game
   */
  private addNextLetterVisual(game: Game): void {
    if (this.charIndex < this.nbCharMax) {
      let word: Letter[] = game.words[this.wordIndex];
      word[this.charIndex] = this.nextLetter;
      game.words[this.wordIndex] = word;
    }
  }

  /**
   * When : User remove a letter
   * Then : Update then the blue tool position
   * @param game
   */
  private removeNextLetterVisual(game: Game): void {
    let word: Letter[] = game.words[this.wordIndex];
    word[this.charIndex] = this.nextLetter;
    game.words[this.wordIndex] = word;
    if (this.charIndex !== this.nbCharMax - 1) {
      word[this.charIndex + 1] = this.emptyLetter;
    }
  }

  /**
   * When : Uuser enter a word
   * Then : Check letters and update it's status
   * @param game
   */
  checkWord(game: Game, wordToFind: string): void {
    let s: String = this.letterToStringFromCurrentWord(game);
    for (let lIndex in game.words[this.wordIndex]) {
      let l: Letter = game.words[this.wordIndex][lIndex];
      if (!wordToFind.includes(l.value)) {
        l.status = LETTER_STATUS.KO;
      } else if (wordToFind.charAt(parseInt(lIndex)) === l.value) {
        l.status = LETTER_STATUS.OK;
      }
    }
    this.checkOccurence(game, wordToFind);
  }

  private letterToStringFromCurrentWord(game: Game): String {
    let s: String = '';
    for (let l of game.words[this.wordIndex]) {
      s += l.value;
    }
    return s;
  }

  private checkOccurence(game: Game, wordToFind: String): void {
    let word: Letter[] = game.words[this.wordIndex];
    for (let l of word) {
      if (l.status == LETTER_STATUS.ANY) {
        const nbLetterOk = word.filter(
          (element) =>
            element.value == l.value && element.status == LETTER_STATUS.OK
        );
        const nbLetterAlmost = word.filter(
          (element) =>
            element.value == l.value && element.status == LETTER_STATUS.ALMOST
        );
        const nbOcc = this.countOccurrences(wordToFind, l.value);
        if (nbLetterAlmost.length + nbLetterOk.length - nbOcc < 0) {
          l.status = LETTER_STATUS.ALMOST;
        } else {
          l.status = LETTER_STATUS.KO;
        }
      }
    }
  }

  private countOccurrences(string: String, character: String) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count++;
      }
    }
    return count;
  }
}
