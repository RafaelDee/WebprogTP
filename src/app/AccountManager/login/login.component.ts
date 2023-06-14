import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

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
  constructor(private route:ActivatedRoute,private auth:AuthService){}
  login(){
    this.loginStatus = null;
    try{
      this.auth.login(this.email.nativeElement.value,this.password.nativeElement.value)
    }catch(e){
      console.log((e as Error).name);
      this.loginStatus = e as Error;
    }

  }
}
