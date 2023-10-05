import { Injectable } from '@angular/core';
import { KEYBOARD_TYPE } from '../enums/keyboardType.enum';
import { LETTER_STATUS } from '../enums/letterState.enum';
import { Letter } from '../models/letter.model';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  userKeyboardType = KEYBOARD_TYPE.AZERTY;

  // AZERTY keyboard
  keyboardFirstLineAzerty: Letter[] = [
    { value: 'a', status: LETTER_STATUS.OK },
    { value: 'z', status: LETTER_STATUS.OK },
    { value: 'e', status: LETTER_STATUS.NONE },
    { value: 'r', status: LETTER_STATUS.NONE },
    { value: 't', status: LETTER_STATUS.NONE },
    { value: 'y', status: LETTER_STATUS.NONE },
    { value: 'u', status: LETTER_STATUS.NONE },
    { value: 'i', status: LETTER_STATUS.NONE },
    { value: 'o', status: LETTER_STATUS.KO },
    { value: 'p', status: LETTER_STATUS.NONE },
  ];
  keyboardSecondLineAzerty: Letter[] = [
    { value: 'q', status: LETTER_STATUS.NONE },
    { value: 's', status: LETTER_STATUS.NONE },
    { value: 'd', status: LETTER_STATUS.NONE },
    { value: 'f', status: LETTER_STATUS.NONE },
    { value: 'g', status: LETTER_STATUS.ALMOST },
    { value: 'h', status: LETTER_STATUS.NONE },
    { value: 'j', status: LETTER_STATUS.NONE },
    { value: 'k', status: LETTER_STATUS.NONE },
    { value: 'l', status: LETTER_STATUS.NONE },
    { value: 'm', status: LETTER_STATUS.NONE },
  ];
  keyboardThirdLineAzerty: Letter[] = [
    { value: 'w', status: LETTER_STATUS.NONE },
    { value: 'x', status: LETTER_STATUS.NONE },
    { value: 'c', status: LETTER_STATUS.NONE },
    { value: 'v', status: LETTER_STATUS.NONE },
    { value: 'b', status: LETTER_STATUS.NONE },
    { value: 'n', status: LETTER_STATUS.NONE },
  ];

  // QWERTY keyboard
  keyboardFirstLineQwerty: Letter[] = [
    { value: 'q', status: LETTER_STATUS.NONE },
    { value: 'w', status: LETTER_STATUS.NONE },
    { value: 'e', status: LETTER_STATUS.NONE },
    { value: 'r', status: LETTER_STATUS.NONE },
    { value: 't', status: LETTER_STATUS.NONE },
    { value: 'y', status: LETTER_STATUS.NONE },
    { value: 'u', status: LETTER_STATUS.NONE },
    { value: 'i', status: LETTER_STATUS.NONE },
    { value: 'o', status: LETTER_STATUS.NONE },
    { value: 'p', status: LETTER_STATUS.NONE },
  ];
  keyboardSecondLineQwerty: Letter[] = [
    { value: 'a', status: LETTER_STATUS.NONE },
    { value: 's', status: LETTER_STATUS.NONE },
    { value: 'd', status: LETTER_STATUS.NONE },
    { value: 'f', status: LETTER_STATUS.NONE },
    { value: 'g', status: LETTER_STATUS.NONE },
    { value: 'h', status: LETTER_STATUS.NONE },
    { value: 'j', status: LETTER_STATUS.NONE },
    { value: 'k', status: LETTER_STATUS.NONE },
    { value: 'l', status: LETTER_STATUS.NONE },
  ];
  keyboardThirdLineQwerty: Letter[] = [
    { value: 'z', status: LETTER_STATUS.NONE },
    { value: 'x', status: LETTER_STATUS.NONE },
    { value: 'c', status: LETTER_STATUS.NONE },
    { value: 'v', status: LETTER_STATUS.NONE },
    { value: 'b', status: LETTER_STATUS.NONE },
    { value: 'n', status: LETTER_STATUS.NONE },
    { value: 'm', status: LETTER_STATUS.NONE },
  ];

  changeKeyboardType() {
    if (this.userKeyboardType === KEYBOARD_TYPE.AZERTY) {
      this.userKeyboardType = KEYBOARD_TYPE.QWERTY;
    } else {
      this.userKeyboardType = KEYBOARD_TYPE.AZERTY;
    }
  }

  getKeyboardFirstLine(): Letter[] {
    if (this.userKeyboardType === KEYBOARD_TYPE.AZERTY)
      return this.getKeyboardFirstLineAzerty();
    return this.getKeyboardFirstLineQwerty();
  }

  getKeyboardSecondLine(): Letter[] {
    if (this.userKeyboardType === KEYBOARD_TYPE.AZERTY)
      return this.getKeyboardSecondLineAzerty();
    return this.getKeyboardSecondLineQwerty();
  }

  getKeyboardThirdLine(): Letter[] {
    if (this.userKeyboardType === KEYBOARD_TYPE.AZERTY)
      return this.getKeyboardThirdLineAzerty();
    return this.getKeyboardThirdLineQwerty();
  }

  // AZERTY getter
  getKeyboardFirstLineAzerty(): Letter[] {
    return this.keyboardFirstLineAzerty;
  }

  getKeyboardSecondLineAzerty(): Letter[] {
    return this.keyboardSecondLineAzerty;
  }

  getKeyboardThirdLineAzerty(): Letter[] {
    return this.keyboardThirdLineAzerty;
  }

  // QWERTY getter
  getKeyboardFirstLineQwerty(): Letter[] {
    return this.keyboardFirstLineQwerty;
  }

  getKeyboardSecondLineQwerty(): Letter[] {
    return this.keyboardSecondLineQwerty;
  }

  getKeyboardThirdLineQwerty(): Letter[] {
    return this.keyboardThirdLineQwerty;
  }
}