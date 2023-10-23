import { Component, Output, EventEmitter } from '@angular/core';
import { Letter } from 'src/app/models/letter.model';
import { AlphabetService } from 'src/app/services/alphabet-service.service';
import { KeyboardCommunicationService } from 'src/app/services/keyboard-communication.service';

@Component({
  selector: 'app-wordle-keyboard',
  templateUrl: './wordle-keyboard.component.html',
  styleUrls: ['./wordle-keyboard.component.css'],
})
export class WordleKeyboardComponent {
  keyboardFirstLine!: Letter[];
  keyboardSecondLine!: Letter[];
  keyboardThirdLine!: Letter[];

  word!: Letter[];

  @Output() userInput = new EventEmitter<Letter>();

  @Output() returnEvent = new EventEmitter<void>();

  @Output() deleteEvent = new EventEmitter<void>();

  constructor(
    private alphabetService: AlphabetService,
    private keyboardCommunicationService: KeyboardCommunicationService
  ) {}

  ngOnInit() {
    this.retrieveKeyboard();
    this.keyboardCommunicationService
      .getChangeKeyboardEvent()
      .subscribe((keyboardType) => {
        this.alphabetService.changeKeyboardType(keyboardType);
        this.retrieveKeyboard();
      });
  }

  private retrieveKeyboard(): void {
    this.keyboardFirstLine = this.alphabetService.getKeyboardFirstLine();
    this.keyboardSecondLine = this.alphabetService.getKeyboardSecondLine();
    this.keyboardThirdLine = this.alphabetService.getKeyboardThirdLine();
  }

  userClickKeyboard(value: Letter) {
    this.userInput.emit(value);
  }

  returnEventKeyboard() {
    this.returnEvent.emit();
  }

  deleteEventKeyboard() {
    this.deleteEvent.emit();
  }
}
