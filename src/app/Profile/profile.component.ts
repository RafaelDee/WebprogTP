import { currentAcc } from './../../assets/database';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor() {

  }
  currentAcc = currentAcc;
  ngOnInit() {
    //put js code here

  }
}
