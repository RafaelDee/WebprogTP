import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @ViewChild('username') username:ElementRef;
  @ViewChild('email') email:ElementRef;
  @ViewChild('password') password:ElementRef;
  @ViewChild('confirmpassword') Cpassword:ElementRef;
  constructor(private router: Router, private route: ActivatedRoute,private auth:AuthService) {}
  loginStatus?:Error;
  signup(){
    this.loginStatus = null;
    try{
      this.auth.signup(this.username.nativeElement.value,this.email.nativeElement.value,this.password.nativeElement.value,this.Cpassword.nativeElement.value)
    }catch(e){
      console.log((e as Error).name);
      this.loginStatus = e as Error;
    }
  }
}
