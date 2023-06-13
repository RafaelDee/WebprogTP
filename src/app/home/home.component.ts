import { Component, Input } from '@angular/core';
import { GameItem, games } from 'src/assets/database';
//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //constructor(private modalService: NgbModal) {}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  items:GameItem[] = games;
  spotlightItems = games.sort(() => 0.5 - Math.random()).slice(0,4);
  gamecat:Array<Array<GameItem>> = new Array<Array<GameItem>>;
  ngOnInit(){
    console.log(games.length)
    games.forEach(game=>{
      while(true){
      let selector = Math.floor(Math.random() * 3);
      if(this.gamecat[selector] == null)this.gamecat[selector] = new Array<GameItem>;
      if(this.gamecat[selector].length > games.length /3)continue;
      this.gamecat[selector].push(game);
        break;
      }
    })
  }
}
