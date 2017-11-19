import { Component, OnInit } from '@angular/core';
import { ConcertService } from './../concert.service';
import { GenreService } from './../genre.service';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})

export class ConcertsComponent {
  concerts$;
  genres$;

  constructor(concertService: ConcertService, genreService: GenreService) {
    this.concerts$ = concertService.getAll();
    this.genres$ = genreService.getAll();
   }
    
}
