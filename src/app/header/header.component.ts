import { Component, OnInit } from '@angular/core';
import { DummyDataServiceService } from '../dummy-data-service.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { LoginServiceService } from '../login-service.service';
import { HttpClient } from '@angular/common/http';
import { GetUrlService } from '../get-url.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private storage : LocalStorageService,private dummydata:DummyDataServiceService, private router: Router,private loginService : LoginServiceService,private http : HttpClient,  private getUrlService : GetUrlService) { 
    this.http.get(this.getUrlService.getAllMovies).subscribe(data=>{
      this.aMovies.push(data);
    });
	if(localStorage.getItem('token') == null)
	{
		this.showOptions = false;
	}
    // this.aMovies.push(this.dummydata.allMovies);
   }

  ngOnInit() {
  }
  value='';
  searchResultArray = [];
  aMovies = [];
  showOptions = true;
  search(){
	this.searchResultArray.length = 0;
    console.log("searching for "+this.value);
    if(this.value != ''){
      console.log("searching..");
      var found = 0;
      this.aMovies[0].forEach((it,i)=>{
        console.log("checking for "+it.title);
        if(it.title.toLowerCase().match(this.value.toLowerCase())){
          this.searchResultArray.push(it);
          console.log(it.title);
          found = 1;
        }
      });
      if(found == 0){
        this.searchResultArray=[{
          title:'No results Found!!!'
        }];
      }
    }
    else{
      this.searchResultArray.length=0;
    }
  }

  logout(){
    this.loginService.loggedIn = false;
    this.storage.token = '';
	localSorage.removeItem('token');
    this.router.navigate(['']);
  }

}
