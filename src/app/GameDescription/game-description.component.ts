import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { GameItem, games } from 'src/assets/database';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss'],
})
export class GameDescriptionComponent {
  moment = moment;
  currentGame:GameItem;
  playingIndex:number = null;
  constructor(private route: ActivatedRoute,public auth:AuthService) {}
  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }
  addToWishlist(state:boolean){
    this.auth.addToWishlist(this.currentGame.id,state)
  }
  ngAfterViewInit(){
    const myCarousel = document.querySelector('#gamesCarousel');
    myCarousel.querySelectorAll('video').forEach((element) => {
      element.volume = 0.3;
    });
    myCarousel.querySelectorAll('video')[0]?.play();
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.currentGame = games.find((asd) => asd.id == id);
    document.title = this.currentGame.title;
    const myCarousel = document.querySelector('#gamesCarousel');
    myCarousel.addEventListener('slide.bs.carousel', (event) => {
      if(this.playingIndex != null){
        (event as unknown as Event).stopPropagation();
      }
      myCarousel.querySelectorAll('video').forEach((element) => {
        element.pause();
      });
    });
  }
  playing(index){
    this.playingIndex = index;
  }
  pause() {
    this.playingIndex = null;
  }
  play() {
  }
}
