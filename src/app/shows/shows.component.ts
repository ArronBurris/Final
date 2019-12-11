import { Component, OnInit } from '@angular/core';
import { IShows } from './shows';
import { ShowService } from './shows.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  pageTitle: string = "Popular shows";
  imageWidth: number = 300;
  imageMargin: number = 5;
  shows: IShows[] = [];

  constructor(private showService: ShowService) {}

   ngOnInit(){
    this.showService.getShows().subscribe(show => {
      console.log(show);
      this.shows = show;
    });
   }
}
