import { Component, OnInit, Input } from '@angular/core';
import { Concert } from './../models/concert';
import { SavedConcertsService } from './../saved-concerts.service';
import { SavedConcerts } from './../models/saved-concerts';

@Component({
  selector: 'concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.css']
})
export class ConcertCardComponent {
  @Input('concert') concert: Concert;
  @Input('show-actions') showActions = true;
  @Input('saved-concerts') savedConcerts: SavedConcerts;

  constructor(private savedConcertsService: SavedConcertsService) { }
  
  addToSavedConcerts() {
    this.savedConcertsService.addToSavedConcerts(this.concert);  
  }
}

