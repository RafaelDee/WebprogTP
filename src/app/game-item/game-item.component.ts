import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent {
  @Input() item:GameItem;
}
export class GameItem{
  cover:string;
  title:string;
  description?:string;
}
