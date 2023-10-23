import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-archive',
  templateUrl: './popup-archive.component.html',
  styleUrls: ['./popup-archive.component.css'],
})
export class PopupArchiveComponent {
  @Input()
  title!: string;

  @Output() closePopupEvent = new EventEmitter<void>();

  closePopup() {
    this.closePopupEvent.emit();
  }
}
