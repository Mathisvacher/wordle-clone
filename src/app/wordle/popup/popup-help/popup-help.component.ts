import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-help',
  templateUrl: './popup-help.component.html',
  styleUrls: ['./popup-help.component.css'],
})
export class PopupHelpComponent {
  @Input()
  title!: string;

  @Output() closePopupEvent = new EventEmitter<void>();

  closePopup() {
    this.closePopupEvent.emit();
  }
}
