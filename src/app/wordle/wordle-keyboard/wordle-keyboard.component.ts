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

  constructor(private alphabetService: AlphabetService) {}

  ngOnInit() {
    this.retrieveKeyboard();
  }

  private retrieveKeyboard(): void {
    this.keyboardFirstLine = this.alphabetService.getKeyboardFirstLine();
    this.keyboardSecondLine = this.alphabetService.getKeyboardSecondLine();
    this.keyboardThirdLine = this.alphabetService.getKeyboardThirdLine();
  }

  changeKeyboardType() {
    this.alphabetService.changeKeyboardType();
    this.retrieveKeyboard();
  }

  userClickKeyboard(value: Letter) {
    this.userInput.emit(value);
  }

  onKeyDown(event: KeyboardEvent) {
    // Vous pouvez accéder à des informations sur l'événement ici
    console.log('Touche pressée :', event.key);
  }
}
