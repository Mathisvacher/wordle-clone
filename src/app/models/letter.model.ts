import { LETTER_STATUS } from '../enums/letterState.enum';

export interface Letter {
  value: string;
  status: LETTER_STATUS;
}
