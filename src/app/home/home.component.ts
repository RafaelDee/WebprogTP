import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GameItem } from '../game-item/game-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private modalService: NgbModal) {}

  items:GameItem[] = [
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:"asd"},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
    {cover:'https://cdn.mos.cms.futurecdn.net/JarKa4TVZxSCuN8x8WNPSN.jpg',title:'Genshin Impact',description:loremIpsum},
  ];
}
export const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
