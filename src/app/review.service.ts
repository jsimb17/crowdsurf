import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ReviewService {

  constructor(private db: AngularFireDatabase) { }

  create(review) {
    return this.db.list('/reviews').push(review);
  }
  
  getAll() {
    return this.db.list('/reviews');
  }
}
