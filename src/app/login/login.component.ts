import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';
import { GetUrlService } from '../get-url.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private getUrlService : GetUrlService,private storage : LocalStorageService,private router : Router, private loginService:LoginServiceService, private http : HttpClient) { 
    if(localStorage.getItem('token')!=null){
      this.router.navigate(['portal']);
    }
  }

  ngOnInit() {
  }

  username = '';
  password = '';
  showSpinner = false;
  disableButton = true;
  onSubmit(){
    console.log("routing");
    // this.router.navigate(['loading']);
    
    var userdata = {
      user_name:this.username,
      user_pass:this.password
    }
    this.showSpinner = true;
    this.http.post(this.getUrlService.getLogin,userdata).subscribe(data=>{
      //console.log(data);
      if(this.authenticate(data)){
        this.loginService.loggedIn = true;
        this.showSpinner = false;
        this.router.navigate(['portal']);
      }
      else{
        this.router.navigate(['']);
      }
    });
    // this.loginService.loggedIn = true;
    // this.router.navigate(['portal']);
    
  }

  authenticate(data){
    
    if(data.Token){
	    localStorage.setItem('token',data.Token);
      return true;
    }
    return false;
  }

  onKeyUp(){
    if(this.username!="" && this.password!=""){
      this.disableButton = false;
    }
  }

}
