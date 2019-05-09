import { Injectable } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router, private loginService: LoginServiceService) { }
  
  logout(){
    localStorage.removeItem('token');
    this.loginService.loggedIn = false;
    this.router.navigate(['']);
    
  }

}
