import { Component } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent {
  currentRate = 3.5
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
class Game{
  title:string;
  covers:string[];
  titleCover:string;
  background?:string[];
  shortDesc:string;
  description:string;
  specification:{recommended:{[key: string]: string}[],minimum:{[key: string]: string}[]}
  supportedLang:{[key: string]: string}[];
}
