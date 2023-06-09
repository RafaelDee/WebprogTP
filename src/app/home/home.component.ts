import { Component, Input } from '@angular/core';
//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameItem } from '../game-item/game-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //constructor(private modalService: NgbModal) {}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  items:GameItem[] = [
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:"asd"},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
  ];
}
