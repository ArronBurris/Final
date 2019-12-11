import { Injectable } from '@angular/core';
import { IMovies } from './movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class MovieService{
    constructor(private http: HttpClient){}

    movieUrl =  'https://api.themoviedb.org/3/movie/now_playing?api_key=09449180441e77d9f5b404c92c15225d&language=en-US&page=1';
  
    getMovies(): Observable<IMovies[]> {
        return this.http.get<IMovies[]>(this.movieUrl)

        
    }
}