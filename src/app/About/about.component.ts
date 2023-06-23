import { Component } from '@angular/core';
import { Member } from './member/member.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  members: Member[] = [
    {
      name: 'John Rafael Dee',
      role: 'Home, Game Info, About, 404',
      image:
        'https://firebasestorage.googleapis.com/v0/b/webprogtp.appspot.com/o/307102024_796648078042226_5554495226624711770_n.jpg?alt=media&token=cbf69973-876c-47f8-8660-ce8fdc6d2a86',
      title: 'Lead Developer',
    },
    {
      name: 'Kurt de Leon',
      role: 'Profile',
      image:
        'https://firebasestorage.googleapis.com/v0/b/webprogtp.appspot.com/o/235252455_3857701217669225_6020221615064503269_n.jpg?alt=media&token=d376e25d-4e30-4d8a-9895-01a2534f75b0',
      title: 'UI Designer',
    },
    {
      name: 'Raymon Mendez Orobia',
      role: 'Game Codes',
      image:
        'https://firebasestorage.googleapis.com/v0/b/webprogtp.appspot.com/o/180442114_309096360628270_5047664643721299222_n.jpg?alt=media&token=e0ac935c-b442-4eb1-a9e7-89d329e03bfd',
      title: 'UI Designer',
    },
    {
      name: 'Richard Tandayo',
      role: 'Community',
      image:
        'https://firebasestorage.googleapis.com/v0/b/webprogtp.appspot.com/o/340265602_127389036891608_7552253074998667844_n.jpg?alt=media&token=0e714d12-4f85-4e6f-9103-876a5d3b71da',
      title: 'UI Designer',
    },
    {
      name: 'Darren Dave Macrol',
      role: 'Login/Signup',
      image:
        'https://firebasestorage.googleapis.com/v0/b/webprogtp.appspot.com/o/339827011_1279529035968982_1477036824252742469_n.jpg?alt=media&token=04bb7163-b5b5-41a3-bca9-dbf9e4a30afd',
      title: 'UI Designer',
    },
  ];
}
