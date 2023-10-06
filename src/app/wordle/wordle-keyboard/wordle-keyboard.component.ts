import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Letter } from 'src/app/models/letter.model';
import { AlphabetService } from 'src/app/services/alphabet-service.service';

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

  constructor(private alphabetService: AlphabetService) {}

  ngOnInit() {
    this.retrieveKeyboard();
  }

  private retrieveKeyboard(): void {
    this.keyboardFirstLine = this.alphabetService.getKeyboardFirstLine();
    this.keyboardSecondLine = this.alphabetService.getKeyboardSecondLine();
    this.keyboardThirdLine = this.alphabetService.getKeyboardThirdLine();
    console.log(this.keyboardFirstLine);
  }

  changeKeyboardType() {
    this.alphabetService.changeKeyboardType();
    this.retrieveKeyboard();
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
