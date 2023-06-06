import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { GameDescriptionComponent } from './GameDescription/game-description.component';
import { GameCodesComponent } from './GameCodes/game-codes.component';
import { AccountManagerComponent } from './AccountManager/account-manager.component';
import { CommunityComponent } from './community/community.component';
import { AboutComponent } from './About/about.component';
import { ProfileComponent } from './Profile/profile.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"game/:id",component:GameDescriptionComponent},
  {path:"gamecodes",component:GameCodesComponent},
  {path:"setup",component:AccountManagerComponent},
  {path:"profile",component:ProfileComponent},
  {path:"community",component:CommunityComponent},
  {path:"about",component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
