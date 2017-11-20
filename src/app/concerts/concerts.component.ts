import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConcertService } from './../concert.service';
import { SavedConcertsService } from './../saved-concerts.service';
import { ActivatedRoute } from '@angular/router';
import { Concert } from './../models/concert';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit, OnDestroy {
  concerts: Concert[] = [];
  filteredConcerts: Concert[] = [];
  genre: string;
  savedConcerts: any;
  subscription: Subscription;
  
  constructor(
    route: ActivatedRoute,
    concertService: ConcertService,
    private savedConcertsService: SavedConcertsService
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
   
   async ngOnInit() {
     this.subscription = (await this.savedConcertsService.getSavedConcerts())
     .subscribe(savedConcerts => this.savedConcerts = savedConcerts); 
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
