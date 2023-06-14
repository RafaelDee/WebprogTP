import { AuthService } from './../auth.service';

import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public auth:AuthService) {

  }
  createRandomUser(): Achievements {
    return {
      title:faker.company.catchPhrase(),
      cover:faker.image.urlPicsumPhotos(),
      description:faker.hacker.phrase(),
      completion:faker.number.int({max:100,min:0})
    };
  }
  createCaimed(): {cover:string} {
    return {
      cover:faker.image.urlPicsumPhotos(),
    };
  }
  profiledesc = faker.person.bio();
  recentylClaimed:{cover:string}[] = faker.helpers.multiple(this.createCaimed, {
    count: 4
  });
  randomAcheivements: Achievements[] = faker.helpers.multiple(this.createRandomUser, {
    count: 10
  });
  ngOnInit() {
    //put js code here

  }
}
export class Achievements{
  title:string;
  cover:string;
  description:string;
  completion:number;
}
