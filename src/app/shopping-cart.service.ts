import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Concert } from './models/concert';
import { ShoppingCart } from './models/shopping-cart';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
  
  async getCart(): Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId)
      .map(x => new ShoppingCart(x.items));
  }
  
  private getItem(cartId: string, concertId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + concertId);
  }
  
  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
  }
  
  async addToCart(concert: Concert) {
      this.updateItemQuantity(concert, 1);
  }
  
  async removeFromCart(concert: Concert) {
    this.updateItemQuantity(concert, -1);
  } 
  
  private async updateItemQuantity(concert: Concert, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, concert.$key);
    item$.take(1).subscribe(item => {
      item$.update({ concert: concert, quantity: (item.quantity || 0) + change});
    }); 
  }
}
