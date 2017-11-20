import { SavedConcertsItem } from './saved-concerts-item';

export class SavedConcerts {
    constructor(public items: SavedConcertsItem[]) {}
    
    get totalItemsCount() {
      let count = 0;
      for (let concertId in this.items) 
        count += this.items[concertId].quantity
      return count;
    }
}