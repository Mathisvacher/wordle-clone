import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  getOneWord() {
    const randomIndex = Math.floor(Math.random() * this.wordList.length);
    const randomElement = this.wordList[randomIndex];
    return randomElement;
  }

  wordList: string[] = [
    'table',
    'fleur',
    'plage',
    'livre',
    'coeur',
    'monte',
    'ombre',
    'bruit',
    'pluie',
    'etude',
    'faire',
    'pomme',
    'lampe',
    'train',
    'route',
    'moule',
    'chaud',
    'froid',
    'temps',
    'forme',
    'ombre',
    'porte',
    'quart',
    'forte',
    'merci',
    'coupe',
    'etape',
    'cause',
    'salle',
    'craie',
    'trier',
    'avoir',
    'aider',
    'rouge',
    'jaune',
    'blanc',
    'ferme',
    'grand',
    'petit',
    'vivre',
  ];
}
