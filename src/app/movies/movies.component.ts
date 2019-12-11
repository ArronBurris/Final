import { Component, OnInit } from '@angular/core';
import { IMovies } from './movies';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  pageTitle: string = "Movies now playing"
  imageWidth: number = 300;
  imageMargin: number = 5;
  movies: IMovies[] = [ ];

  constructor(private movieService: MovieService) {}

   ngOnInit(){
    this.movieService.getMovies().subscribe(movie => {
      console.log(movie);
      this.movies = movie;
    });
   }

 

}
