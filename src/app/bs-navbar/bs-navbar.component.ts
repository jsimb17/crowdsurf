import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { SavedConcertsService } from './../saved-concerts.service';
import { ShoppingCartService } from './../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { SavedConcerts } from './../models/saved-concerts';
import { ShoppingCart } from './../models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  savedConcerts$: Observable<SavedConcerts>;
  cart$: Observable<ShoppingCart>;
  
  constructor(private auth: AuthService, private savedConcertsService: SavedConcertsService, private shoppingCartService: ShoppingCartService) {   
    
  }
  
  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.savedConcerts$ = await this.savedConcertsService.getSavedConcerts();
    this.cart$ = await this.shoppingCartService.getCart();
      
  }
  
  logout() {
    this.auth.logout();
  }

}
