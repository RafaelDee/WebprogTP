import { Component, OnInit } from '@angular/core';
import { games } from 'src/assets/database';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent {
  moment=moment;
  currentGame;
  constructor(private route: ActivatedRoute){

  }
  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}
  ngOnInit(){
    let id = this.route.snapshot.paramMap.get('id');
    this.currentGame = games.find(asd=>asd.id == id);
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
