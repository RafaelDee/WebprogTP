import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent {
  createTopics(): Topic {
    return {
      title: faker.hacker.adjective(),
      image: faker.image.urlLoremFlickr(),
      content: faker.lorem.sentences(3),
    };
  }
  topics:Topic[] = faker.helpers.multiple(
    this.createTopics,
    {
      count: 15,
    }
  );
}
export interface Topic{
  title:string;
  image:string;
  content:string;
}
