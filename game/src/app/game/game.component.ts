// game.component.ts
import { Component, Input } from '@angular/core';
import { GameParams } from '../models/game-params';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent {
  // Properties
  gameParams = new GameParams();

  @Input() isPlaying = false;

  constructor() { }

  playGame(params: any) {
    this.isPlaying = true;
    this.gameParams = new GameParams();
    this.gameParams.width = params.boardWidth;
    this.gameParams.height = params.boardWidth;
    this.gameParams.pitsCount = params.pitsCount;
    this.gameParams.arrowsCount = params.arrowsCount;
  }

  endGame() {
    this.isPlaying = false;
  }

  getZone() {
    if (this.isPlaying) {
      return 'Panel de juego';
    } else {
      return 'Parámetros del juego';
    }
  }
}
