import { Component } from '@angular/core';
import { games } from 'src/assets/database';
import * as moment from 'moment';
@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent {
  moment=moment;
  currentGame = games[0];
  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
}
function getFileType(file) {

  if(file.type.match('image.*'))
    return 'image';

  if(file.type.match('video.*'))
    return 'video';

  if(file.type.match('audio.*'))
    return 'audio';

  // etc...

  return 'other';
}
