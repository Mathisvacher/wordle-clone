import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { Letter } from 'src/app/models/letter.model';

@Component({
  selector: 'app-wordle-grid',
  templateUrl: './wordle-grid.component.html',
  styleUrls: ['./wordle-grid.component.css'],
})
export class WordleGridComponent {
  @Input()
  game!: Game;
}
