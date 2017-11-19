import { Component, OnInit } from '@angular/core';
import { ConcertService } from './../concert.service';
import { ActivatedRoute } from '@angular/router';
import { Concert } from './../models/concert';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})

export class ConcertsComponent {
  concerts: Concert[] = [];
  filteredConcerts: Concert[] = [];
  genre: string;
  
  constructor(
    route: ActivatedRoute,
    concertService: ConcertService
  ) {  
      
    concertService
      .getAll()
      .switchMap(concerts => {
      this.concerts = concerts;
      return route.queryParamMap;
      })   
      .subscribe(params => {
        this.genre = params.get('genre');
        
        this.filteredConcerts = (this.genre) ?
          this.concerts.filter(c => c.genre === this.genre) :
          this.concerts;
      });
   }  
}
