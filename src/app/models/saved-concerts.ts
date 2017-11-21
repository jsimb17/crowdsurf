import { Concert } from './concert';
import { SavedConcertsItem } from './saved-concerts-item';

export class SavedConcerts {
    items: SavedConcertsItem[] = [];
    
    constructor(public itemsMap: { [concertId: string]: SavedConcertsItem } ) {
      this.itemsMap = itemsMap || {};
      
      for (let concertId in itemsMap) {
        let item = itemsMap[concertId];
        this.items.push(new SavedConcertsItem(item.concert, item.quantity));
      }
    }
    
    getQuantity(concert: Concert) {
        let item = this.itemsMap[concert.$key];
        return item ? item.quantity: 0;
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
        count += this.itemsMap[concertId].quantity
      return count;
    }
}