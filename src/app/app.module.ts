import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameDescriptionComponent } from './gameDescription/game-description.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { AccountManagerComponent } from './accountManager/account-manager.component';
import { GameCodesComponent } from './gameCodes/game-codes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommunityComponent } from './community/community.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameItemComponent } from './game-item/game-item.component';
import { SafeHTMLPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameDescriptionComponent,
    ProfileComponent,
    AboutComponent,
    AccountManagerComponent,
    GameCodesComponent,
  CommunityComponent,NavBarComponent, NotFoundComponent, GameItemComponent, SafeHTMLPipe],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
