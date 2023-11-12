import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-popup-game-over',
  templateUrl: './popup-game-over.component.html',
  styleUrls: ['./popup-game-over.component.css'],
})
export class PopupGameOverComponent {
  @Input()
  title!: string;

  @Input()
  game!: Game;

  @Output() resetGameEvent = new EventEmitter<void>();

  ngOnInit() {}

  toDefinition(): void {
    const urlExterne = 'https://1mot.net/' + this.game.wordToFine;
    window.open(urlExterne, '_blank');
  }

  resetGame(): void {
    this.resetGameEvent.emit();
  }
}
