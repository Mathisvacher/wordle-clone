import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-game-over',
  templateUrl: './popup-game-over.component.html',
  styleUrls: ['./popup-game-over.component.css'],
})
export class PopupGameOverComponent {
  @Input()
  title!: string;
}
