import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KEYBOARD_TYPE } from 'src/app/enums/keyboardType.enum';
import { AlphabetService } from 'src/app/services/alphabet-service.service';

@Component({
  selector: 'app-popup-settings',
  templateUrl: './popup-settings.component.html',
  styleUrls: ['./popup-settings.component.css'],
})
export class PopupSettingsComponent {
  @Input()
  title!: string;

  keyboardTypeEnum = KEYBOARD_TYPE;

  currentKeyboardType!: KEYBOARD_TYPE;

  @Output() closePopupEvent = new EventEmitter<void>();

  @Output() changeKeyboardEvent = new EventEmitter<KEYBOARD_TYPE>();

  constructor(private alphabetService: AlphabetService) {}
  ngOnInit() {
    this.currentKeyboardType = this.alphabetService.getUserKeyboardType();
  }

  closePopup() {
    this.closePopupEvent.emit();
  }

  changeKeyboard(keyboardType: KEYBOARD_TYPE) {
    this.changeKeyboardEvent.emit(keyboardType);
    this.currentKeyboardType = this.alphabetService.getUserKeyboardType();
  }
}
