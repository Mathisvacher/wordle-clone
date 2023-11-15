import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-popup-stats',
  templateUrl: './popup-stats.component.html',
  styleUrls: ['./popup-stats.component.css'],
})
export class PopupStatsComponent {
  @Input()
  title!: string;

  @Input()
  games!: Game[];

  @Output()
  closePopupEvent = new EventEmitter<void>();

  nbWin: number = 0;
  pourcentageWin: number = 0;
  bestSerie: number = 0;
  currentSerie: number = 0;

  ngOnInit() {
    this.bestSerie = 0;
    this.currentSerie = 0;
    this.nbWin = 0;
    this.pourcentageWin = 0;
    for (let i in this.games) {
      if (this.games[i].success) {
        this.nbWin += 1;
        this.currentSerie += 1;
      } else {
        if (this.bestSerie < this.currentSerie) {
          this.bestSerie = this.currentSerie;
        }
        this.currentSerie = 0;
      }
    }
    if (this.bestSerie == 0) {
      this.bestSerie = this.currentSerie;
    }
    if (this.games.length != 0) {
      this.pourcentageWin = Number(
        ((this.nbWin * 100) / this.games.length).toFixed(0)
      );
    }
  }

  closePopup() {
    this.closePopupEvent.emit();
  }
}
