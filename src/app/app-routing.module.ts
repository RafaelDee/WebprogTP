import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameDescriptionComponent } from './gameDescription/game-description.component';
import { GameCodesComponent } from './gameCodes/game-codes.component';
import { AccountManagerComponent } from './accountManager/account-manager.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { CommunityComponent } from './community/community.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"game/:id",component:GameDescriptionComponent},
  {path:"gamecodes",component:GameCodesComponent},
  {path:"setup",component:AccountManagerComponent},
  {path:"profile",component:ProfileComponent},
  {path:"community",component:CommunityComponent},
  {path:"about",component:AboutComponent},
  {path:"404",component:NotFoundComponent},
  {path:"**",redirectTo:"404"},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
