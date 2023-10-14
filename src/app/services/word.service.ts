import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  wordList: string[] = ['poire', 'etron', 'chien', 'tacos', 'arabe'];

  getOneWord() {
    const randomIndex = Math.floor(Math.random() * this.wordList.length);
    const randomElement = this.wordList[randomIndex];
    return randomElement;
  }
}
