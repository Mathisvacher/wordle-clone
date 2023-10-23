import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-game-over',
  templateUrl: './popup-game-over.component.html',
  styleUrls: ['./popup-game-over.component.css'],
})
export class PopupGameOverComponent {
  @Input()
  title!: string;

  @Output() closePopupEvent = new EventEmitter<void>();

  closePopup() {
    this.closePopupEvent.emit();
  }
}
