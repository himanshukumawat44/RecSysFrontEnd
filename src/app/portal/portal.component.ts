import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetUrlService } from '../get-url.service';
import { DummyDataServiceService } from '../dummy-data-service.service';
import { LocalStorageService } from '../local-storage.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  recMovies = [];
  ratMovies = [];
  dummyMovies = [];
  showRatingInput = false;
  ratingInput = 1;
  selectedItemId = -1;
  showSpinner = true;
  constructor(private loginService: LoginServiceService, private router : Router, private http : HttpClient, private getUrlService : GetUrlService, private dummyData : DummyDataServiceService, private storage : LocalStorageService ) {
    console.log(storage.token);
    //if(this.storage.token == ''){
      //this.router.navigate(['']);
    //}
    console.log(this.loginService.loggedIn);
    const headerDict = {
      'Content-Type': 'application/json',
	  'Authorization': 'Bearer '+ localStorage.getItem('token')
      //'bearer': this.storage.token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    this.http.get(this.getUrlService.getRatedMovies,requestOptions).subscribe(data=>{
      
      this.ratMovies.push(data);
      // console.log(this.movies);
      
	  this.http.get(this.getUrlService.getRecMovies,requestOptions).subscribe(data=>{
      
      this.recMovies.push(data);
      this.showSpinner = false;
      // console.log(this.movies);
    });

    });
    // this.dummyMovies = this.dummyData.likedMovies;
    // this.recMovies.push(this.dummyMovies);
    // this.ratMovies.push(this.dummyMovies);

  }

  ngOnInit() {
  }
  submitRating(){
    this.showRatingInput=false;
    this.showSpinner = true;
    const headerDict = {
      'Content-Type': 'application/json',
	  'Authorization': 'Bearer '+ localStorage.getItem('token')
      //'bearer': this.storage.token
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    const movie = {
      sno : this.selectedItemId,
      rating : this.ratingInput
    }
    this.http.post(this.getUrlService.submitRating,movie,requestOptions).subscribe(data=>{
      
      console.log(data);
      this.showSpinner = false;
      // console.log(this.movies);
    });
  }
  openRatingInput(id){
    this.selectedItemId=id;
    this.showRatingInput=true;
    console.log(id,this.ratingInput);
  }
  closeRatingInput(){
    this.showRatingInput=false;
  }
  

}
