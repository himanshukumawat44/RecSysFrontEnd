import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private loginService: LoginServiceService) {}

  canActivate(){
    if(localStorage.getItem('token')!=null){
      this.loginService.loggedIn = true;
      return true;
    }
    else{
      this.router.navigate(['']);
    }
    // console.log(localStorage.getItem('token'));
    // return false;
  }

}
