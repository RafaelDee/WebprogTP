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
}
