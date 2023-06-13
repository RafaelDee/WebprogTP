import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { currentAcc } from 'src/assets/database';
import { appname} from 'src/main';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  appname = appname
  //TODO: add profile dynamic items
  navItems: NavItem[] = [
    { name: 'Home', route: '',routeparams:{exact:true}, icon: "fa-house" },
    { name: 'Game Codes', route: 'gamecodes', icon: "fa-qrcode" },
    { name: 'Community', route: 'community', icon: "fa-people-group" },
  ];
  profilePath = 'profile'
  profile:displayAcc = currentAcc;
  setDark = setDark;
  getIsDarkThemed = getIsDarkThemed;
  currentRoute = '';
  constructor(router: Router) {
    //Update the header of the current route
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((url) => {
        this.currentRoute =
          this.navItems.find((f) => f.route == ((url as NavigationEnd).url?.split('/')[1]))?.name ?? '';
      });
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
export function setDark(state:Boolean){
  var htmlElement = document.documentElement;
  if (state) {
    htmlElement.setAttribute("data-bs-theme", "dark");
  } else {
    htmlElement.setAttribute("data-bs-theme",null);
  }
}
export function getIsDarkThemed(){
return document.documentElement.getAttribute("data-bs-theme") == "dark";
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
setDark(event.matches)
});
export interface displayAcc{
  username:string;
  photoURL:string;
}
