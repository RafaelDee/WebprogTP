import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { GameDescriptionComponent } from './GameDescription/game-description.component';
import { ProfileComponent } from './Profile/profile.component';
import { AboutComponent } from './About/about.component';
import { AccountManagerComponent } from './AccountManager/account-manager.component';
import { GameCodesComponent } from './GameCodes/game-codes.component';
import { CommunityComponent } from './community/community.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameDescriptionComponent,
    ProfileComponent,
    AboutComponent,
    AccountManagerComponent,
    GameCodesComponent,
  CommunityComponent,],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
