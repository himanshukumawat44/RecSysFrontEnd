import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GetUrlService {

  constructor() {
    this.getAllMovies = 'https://583fd270-abbd-4b40-8064-bc0572bc38ad.mock.pstmn.io/GetMoviesDataAPI/GetMovies';
    this.getRatedMovies = 'https://583fd270-abbd-4b40-8064-bc0572bc38ad.mock.pstmn.io/GetMoviesDataAPI/ReviewedMovies?user_id=672';
    this.getRecMovies = 'https://583fd270-abbd-4b40-8064-bc0572bc38ad.mock.pstmn.io/GetMoviesDataAPI/RecommendedMovies?user_id=672';
    this.getLogin = 'https://583fd270-abbd-4b40-8064-bc0572bc38ad.mock.pstmn.io/GetMoviesDataAPI/Login';
	// this.getAllMovies = 'http://localhost:51066/GetMoviesDataAPI/GetMovies';
  //   this.getRatedMovies = 'http://localhost:51066/GetMoviesDataAPI/ReviewedMovies';
  //   this.getRecMovies = 'http://localhost:51066/GetMoviesDataAPI/RecommendedMovies';
  //   this.getLogin = 'http://localhost:51066/GetMoviesDataAPI/Login';
  }

  getAllMovies: string;
  getRatedMovies:string;
  getRecMovies:string;
  getLogin:string;

}
