import { Concert } from './concert';

export class ShoppingCartItem {
    constructor(public concert: Concert, public quantity: number) {}
    
    get totalPrice() { return this.concert.ticketPrice * this.quantity; }
}