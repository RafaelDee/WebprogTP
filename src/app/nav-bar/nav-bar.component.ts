import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { webname } from 'src/main';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  headerTitle = webname
  navItems: NavItem[] = [
    { name: 'Home', route: '',routeparams:{exact:true}, icon: "fa-house" },
    { name: 'Game Codes', route: 'gamecodes', icon: "fa-qrcode" },
    { name: 'Community', route: 'community', icon: "fa-people-group" },
  ];
  ;
  currentRoute = '';
  constructor(router: Router,private offcanvasService: NgbOffcanvas) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((url) => {
        //TODO: FIX mess!!
        this.currentRoute =
          this.navItems.find((f) => f.route == ('/'+(url as NavigationEnd).url?.split('/')[1]))?.name ?? '';
      });
  }
  open(content) {
    this.offcanvasService.open(content,{ position: 'end' });
  }
  ngOnInit(): void {}
}
export interface NavItem {
  name: string;
  title?:string;
  route: string;
  routeparams?:any;
  icon?: string;
  children?: NavItem[];
}
