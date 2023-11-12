import { Injectable } from '@angular/core';
import { KEYBOARD_TYPE } from '../enums/keyboardType.enum';
import { LETTER_STATUS } from '../enums/letterState.enum';
import { Letter } from '../models/letter.model';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  private userKeyboardType = KEYBOARD_TYPE.AZERTY;

  private alphabet: Letter[] = [
    { value: 'a', status: LETTER_STATUS.NONE },
    { value: 'b', status: LETTER_STATUS.NONE },
    { value: 'c', status: LETTER_STATUS.NONE },
    { value: 'd', status: LETTER_STATUS.NONE },
    { value: 'e', status: LETTER_STATUS.NONE },
    { value: 'f', status: LETTER_STATUS.NONE },
    { value: 'g', status: LETTER_STATUS.NONE },
    { value: 'h', status: LETTER_STATUS.NONE },
    { value: 'i', status: LETTER_STATUS.NONE },
    { value: 'j', status: LETTER_STATUS.NONE },
    { value: 'k', status: LETTER_STATUS.NONE },
    { value: 'l', status: LETTER_STATUS.NONE },
    { value: 'm', status: LETTER_STATUS.NONE },
    { value: 'n', status: LETTER_STATUS.NONE },
    { value: 'o', status: LETTER_STATUS.NONE },
    { value: 'p', status: LETTER_STATUS.NONE },
    { value: 'q', status: LETTER_STATUS.NONE },
    { value: 'r', status: LETTER_STATUS.NONE },
    { value: 's', status: LETTER_STATUS.NONE },
    { value: 't', status: LETTER_STATUS.NONE },
    { value: 'u', status: LETTER_STATUS.NONE },
    { value: 'v', status: LETTER_STATUS.NONE },
    { value: 'w', status: LETTER_STATUS.NONE },
    { value: 'x', status: LETTER_STATUS.NONE },
    { value: 'y', status: LETTER_STATUS.NONE },
    { value: 'z', status: LETTER_STATUS.NONE },
  ];

  // AZERTY keyboard
  private keyboardFirstLineAzerty: string[] = [
    'a',
    'z',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
  ];
  private keyboardSecondLineAzerty: string[] = [
    'q',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
  ];
  private keyboardThirdLineAzerty: string[] = ['w', 'x', 'c', 'v', 'b', 'n'];
  // QWERTY keyboard
  private keyboardFirstLineQwerty: string[] = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
  ];
  private keyboardSecondLineQwerty: string[] = [
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
  ];
  private keyboardThirdLineQwerty: string[] = [
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
  ];

  //////////////////////
  // GETTER & SETTER //
  //////////////////////
  getAlphabetLetterArray(): Letter[] {
    return this.alphabet;
  }
  // AZERTY getter
  getKeyboardFirstLineAzerty(): string[] {
    return this.keyboardFirstLineAzerty;
  }

  getKeyboardSecondLineAzerty(): string[] {
    return this.keyboardSecondLineAzerty;
  }

  getKeyboardThirdLineAzerty(): string[] {
    return this.keyboardThirdLineAzerty;
  }

  // QWERTY getter
  getKeyboardFirstLineQwerty(): string[] {
    return this.keyboardFirstLineQwerty;
  }

  getKeyboardSecondLineQwerty(): string[] {
    return this.keyboardSecondLineQwerty;
  }

  getKeyboardThirdLineQwerty(): string[] {
    return this.keyboardThirdLineQwerty;
  }

  // General keyboard
  getKeyboardFirstLine(): Letter[] {
    if (this.userKeyboardType === KEYBOARD_TYPE.AZERTY) {
      return this.charactereToLetter(this.getKeyboardFirstLineAzerty());
    }
    return this.charactereToLetter(this.getKeyboardFirstLineQwerty());
  }

  getKeyboardSecondLine(): Letter[] {
    if (this.userKeyboardType === KEYBOARD_TYPE.AZERTY) {
      return this.charactereToLetter(this.getKeyboardSecondLineAzerty());
    }
    return this.charactereToLetter(this.getKeyboardSecondLineQwerty());
  }

  getKeyboardThirdLine(): Letter[] {
    if (this.userKeyboardType === KEYBOARD_TYPE.AZERTY) {
      return this.charactereToLetter(this.getKeyboardThirdLineAzerty());
    }
    return this.charactereToLetter(this.getKeyboardThirdLineQwerty());
  }

  /////////////////////////
  // Keyboard Management //
  /////////////////////////

  /**
   * When : user want to change keyboard type
   * Then : update keyboard status
   */
  changeKeyboardType(keyboardType: KEYBOARD_TYPE) {
    this.userKeyboardType = keyboardType;
  }

  getUserKeyboardType(): KEYBOARD_TYPE {
    return this.userKeyboardType;
  }

  /**
   * When :
   * Then :
   * @param charArray : The string array to translate
   * @returns the string array translate in letter array
   */
  private charactereToLetter(charArray: string[]): Letter[] {
    let letterArray: Letter[] = [];
    for (let c in charArray) {
      let l: Letter | undefined = this.getAlphabetLetterArray().find(
        (l) => l.value === charArray[c]
      );
      if (l) letterArray.push(l);
    }
    return letterArray;
  }

  updateVirtualKeybord(word: Letter[]) {
    for (let l of word) {
      this.alphabet.map((e) => {
        if (e.value === l.value) {
          e.status = l.status;
        }
      });
    }
  }

  resetKeyboard() {
    this.alphabet.forEach((letter) => (letter.status = LETTER_STATUS.NONE));
  }
}
