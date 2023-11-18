import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

import { AuthService as Au0 } from '@auth0/auth0-angular';
import { firstValueFrom } from "rxjs";
import { AuthService } from "./auth.service";
@Injectable()
export class hasAuth implements CanActivate {
  constructor(private auth:AuthService,private auth0:Au0,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean|UrlTree> | boolean|UrlTree {
    return new Promise(async (resolve)=>{
      let asd = this.auth.currentUser != null ||
      (await firstValueFrom(this.auth0.user$)) != null;
      console.log(asd);
      resolve(asd?true:this.router.createUrlTree(['/auth/login']));
    });
  }
}
