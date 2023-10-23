import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-stats',
  templateUrl: './popup-stats.component.html',
  styleUrls: ['./popup-stats.component.css'],
})
export class PopupStatsComponent {
  @Input()
  title!: string;

  @Output() closePopupEvent = new EventEmitter<void>();

  closePopup() {
    this.closePopupEvent.emit();
  }
}
