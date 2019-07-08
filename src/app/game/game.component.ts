import { Component, OnInit, Input } from '@angular/core';
import { GameParams } from '../models/game-params';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  // Properties
  gameParams = new GameParams();

  @Input() isPlaying = false;

  constructor() { }

  ngOnInit() {
  }

  playGame(params: any) {
    this.isPlaying = true;
    this.gameParams = new GameParams();
    this.gameParams.width = params.boardWidth;
    this.gameParams.height = params.boardWidth;
    this.gameParams.wellsCount = params.wellsCount;
    this.gameParams.arrowsCount = params.arrowsCount;
  }

  endGame() {
    this.isPlaying = false;
  }
}
