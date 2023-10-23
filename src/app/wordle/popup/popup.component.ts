import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KEYBOARD_TYPE } from 'src/app/enums/keyboardType.enum';
import { KeyboardCommunicationService } from 'src/app/services/keyboard-communication.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  @Input()
  gameOver!: Boolean;

  @Input()
  helpPopup!: Boolean;

  @Input()
  settingsPopup!: Boolean;

  @Input()
  archivePopup!: Boolean;

  @Input()
  statPopup!: Boolean;

  @Output() closePopupEvent = new EventEmitter<void>();

  constructor(
    private keyboardCommunicationService: KeyboardCommunicationService
  ) {}

  closePopupGameOver() {
    this.closePopupEvent.emit();
  }

  closePopupArchive() {
    this.closePopupEvent.emit();
  }

  closePopupStat() {
    this.closePopupEvent.emit();
  }

  closePopupHelp() {
    this.closePopupEvent.emit();
  }

  closePopupSettings() {
    this.closePopupEvent.emit();
  }

  changeKeyboardType(keyboardType: KEYBOARD_TYPE) {
    this.keyboardCommunicationService.emitChangeKeyboardEvent(keyboardType);
  }
}
