
import { NgModule } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameDescriptionComponent } from './gameDescription/game-description.component';
import { GameCodesComponent } from './gameCodes/game-codes.component';
import { AccountManagerComponent } from './accountManager/account-manager.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { CommunityComponent } from './community/community.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './accountManager/login/login.component';
import { SignupComponent } from './accountManager/signup/signup.component';
import { appname } from 'src/main';
import { hasAuth } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  { path: 'game/:id', component: GameDescriptionComponent },
  { path: 'gamecodes', component: GameCodesComponent ,title:'Game Codes'},
  { path: 'auth', component: AccountManagerComponent, children: [
    {path:'login',component:LoginComponent ,title:'Login'},
    {path:'signup',component:SignupComponent,title:'Signup'}
  ] },
  { path: 'profile', component: ProfileComponent,canActivate:[hasAuth]},
  { path: 'community', component: CommunityComponent ,title:'Community'},
  { path: 'about', component: AboutComponent ,title:'About'},
  { path: '404', component: NotFoundComponent ,title:'Not Found!'},
  { path: '**', redirectTo: '404' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  providers:[hasAuth],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router:Router,private route:ActivatedRoute){
    router.events.subscribe((rte) => {
      // see also
      if(rte instanceof NavigationStart){
        document.title = appname;
      }
  });
  }
}

