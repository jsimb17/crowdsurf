import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from './../../genre.service';

@Component({
  selector: 'concert-filter',
  templateUrl: './concert-filter.component.html',
  styleUrls: ['./concert-filter.component.css']
})
export class ConcertFilterComponent implements OnInit {
  genres$;
  @Input('genre') genre;

  constructor(genreService: GenreService) {
    this.genres$ = genreService.getAll();
   }

  ngOnInit() {
  }

}
