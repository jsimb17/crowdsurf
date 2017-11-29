import { Component, OnInit, Input } from '@angular/core';
import { Concert } from './../models/concert';
import { SavedConcertsService } from './../saved-concerts.service';
import { SavedConcerts } from './../models/saved-concerts';
import { ShoppingCartService } from './../shopping-cart.service';
//import { ShoppingCart } from './../models/shopping-cart';

@Component({
  selector: 'concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.css']
})
export class ConcertCardComponent {
  @Input('concert') concert: Concert;
  @Input('show-actions') showActions = true;
  @Input('saved-concerts') savedConcerts: SavedConcerts;
  @Input('shopping-cart') shoppingCart;

  constructor(private savedConcertsService: SavedConcertsService, private cartService: ShoppingCartService) { }
  
  addToSavedConcerts() {
    this.savedConcertsService.addToSavedConcerts(this.concert);  
  }
  
  addToCart() {
    this.cartService.addToCart(this.concert);
  }
  
  removeFromCart() {
    this.cartService.removeFromCart(this.concert);
  }
  
  getQuantity() {
    if (!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.concert.$key];
    return item ? item.quantity :0;
  }
}

