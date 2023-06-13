import { Component, OnInit } from '@angular/core';
import { games } from 'src/assets/database';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss'],
})
export class GameDescriptionComponent {
  moment = moment;
  carousel:bootstrap.Carousel;
  currentGame;
  playingIndex:number = null;
  constructor(private route: ActivatedRoute) {}
  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }
  ngAfterViewInit(){
    this.carousel = new bootstrap.Carousel(document.querySelector('#gamesCarousel'))
    const myCarousel = document.querySelector('#gamesCarousel');
    myCarousel.querySelectorAll('video').forEach((element) => {
      element.volume = 0.3;
    });
    myCarousel.querySelectorAll('video')[0]?.play();
    this.carousel.pause();
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.currentGame = games.find((asd) => asd.id == id);
    const myCarousel = document.querySelector('#gamesCarousel');
    myCarousel.addEventListener('slide.bs.carousel', (event) => {
      if(this.playingIndex != null){
        console.log('stopping');
        (event as unknown as Event).stopPropagation();
        this.carousel.pause();
      }
      console.log('asd');
      myCarousel.querySelectorAll('video').forEach((element) => {
        element.pause();
      });
    });
    this.carousel?.pause();
  }
  playing(index){
    this.playingIndex = index;
  }
  pause() {
    this.playingIndex = null;
    console.log('pause')
    this.carousel.cycle();
  }
  play() {
    console.log('play')
    this.carousel.pause();
  }
}
