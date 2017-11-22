import { Concert } from './concert';

export class SavedConcertsItem {
    
    constructor(public concert: Concert, public quantity: number) {}
    
    get totalPrice() { return this.concert.ticketPrice * this.quantity; }
}