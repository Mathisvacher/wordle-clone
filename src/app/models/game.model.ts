import { Letter } from './letter.model';

export interface Game {
  date: Date;
  words: Letter[][];
  wordToFine: string;
  success: boolean;
}
