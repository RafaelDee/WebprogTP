import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AuthService as Au0 } from '@auth0/auth0-angular';
import { firstValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('email') email:ElementRef;
  @ViewChild('password') password:ElementRef;
  loginRequired = this.route.snapshot.queryParamMap.get('loginRequired');
  loginStatus?:Error;
  constructor(private route:ActivatedRoute,private auth:AuthService,private auth0:Au0,private router:Router){}
  login(){
    this.loginStatus = null;
    try{
      this.auth.login(this.email.nativeElement.value,this.password.nativeElement.value)
    }catch(e){
      console.error((e as Error).name);
      this.loginStatus = e as Error;
    }
  }
  auth0Login(){
    this.auth0.loginWithPopup().subscribe(async result=>{
      let asd = await firstValueFrom(this.auth0.user$);
      try{
        this.auth.loginAuth0(asd);
        this.router.navigate([''])
      }catch(e){
        console.error((e as Error).name);
        this.loginStatus = e as Error;
      }
    });
  }
}
