import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router: Router) { }

  loggedIn = false;

  login(authtoken){
    localStorage.setItem('token',authtoken);
    this.loggedIn=true;
    this.router.navigate(['portal']);
  }
  
}
