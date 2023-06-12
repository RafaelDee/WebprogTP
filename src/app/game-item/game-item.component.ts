import { Component, Input } from '@angular/core';
import { GameItem } from 'src/assets/database';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {
  @Input() item:GameItem;
}
