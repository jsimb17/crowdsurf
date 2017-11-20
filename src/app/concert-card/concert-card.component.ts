import { Component, OnInit, Input } from '@angular/core';
import { Concert } from './../models/concert';
import { SavedConcertsService } from './../saved-concerts.service';

@Component({
  selector: 'concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.css']
})
export class ConcertCardComponent {
  @Input('concert') concert: Concert;
  @Input('show-actions') showActions = true;
  @Input('saved-concerts') savedConcerts;

  constructor(private savedConcertsService: SavedConcertsService) { }
  
  addToSavedConcerts() {
    this.savedConcertsService.addToSavedConcerts(this.concert);  
  }
  
  removeFromSavedConcerts(){
    this.savedConcertsService.removeFromSavedConcerts(this.concert);
  }
  
  getQuantity() {
    if (!this.savedConcerts) return 0;
    
    let item = this.savedConcerts.items[this.concert.$key];
    return item ? item.quantity: 0;
  }
}

