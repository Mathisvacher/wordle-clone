export enum LETTER_STATUS {
  ANY = 'any-none', // GRID_ONLY - letter && no next
  NONE = 'letter-none', // GRID_ONLY - no letter && no next
  NEXT = 'letter-next', // Next to fill
  OK = 'letter-ok', // At good position
  ALMOST = 'letter-almost', // Not a the good position
  KO = 'letter-ko', // KEYBOARD_ONLY - No in the words
}
