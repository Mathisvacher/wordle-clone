import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wordle-header',
  templateUrl: './wordle-header.component.html',
  styleUrls: ['./wordle-header.component.css'],
})
export class WordleHeaderComponent {
  @Output() openStatEvent = new EventEmitter<void>();
  @Output() openArchiveEvent = new EventEmitter<void>();
  @Output() openHelpEvent = new EventEmitter<void>();
  @Output() openSettingsEvent = new EventEmitter<void>();

  openArchive() {
    this.openArchiveEvent.emit();
  }

  openSettings() {
    this.openSettingsEvent.emit();
  }

  openHelp() {
    this.openHelpEvent.emit();
  }

  openStat() {
    this.openStatEvent.emit();
  }
}
