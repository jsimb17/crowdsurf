import { Component, OnInit, Input } from '@angular/core';
import { Concert } from './../models/concert';
import { SavedConcertsService } from './../saved-concerts.service';

@Component({
  selector: 'concert-quantity',
  templateUrl: './concert-quantity.component.html',
  styleUrls: ['./concert-quantity.component.css']
})
export class ConcertQuantityComponent {
  @Input('concert') concert: Concert;
  @Input('saved-concerts') savedConcerts;

  constructor(private savedConcertsService: SavedConcertsService) { }
  
  addToSavedConcerts() {
    this.savedConcertsService.addToSavedConcerts(this.concert);  
  }
  
  removeFromSavedConcerts(){
    this.savedConcertsService.removeFromSavedConcerts(this.concert);
  }
  
}
