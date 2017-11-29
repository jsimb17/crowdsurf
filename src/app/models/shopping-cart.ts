import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    items: ShoppingCartItem[] = [];
    
    constructor(public itemsMap: { [concertId: string]: ShoppingCartItem }) {
        for (let concertId in itemsMap) {
            let item = itemsMap[concertId];
            this.items.push(new ShoppingCartItem(item.concert, item.quantity));
        }
    }
    
    get totalPrice() {
        let sum = 0;
        for (let concertId in this.items)
            sum += this.items[concertId].totalPrice;
        return sum;
    }
    
    get totalItemsCount() {
      let count = 0;
      for (let concertId in this.itemsMap) 
        count += this.itemsMap[concertId].quantity;
      return count;     
    }
}