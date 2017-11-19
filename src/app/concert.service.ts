import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ConcertService {

  constructor(private db: AngularFireDatabase) { }
  
  create(concert) {
    return this.db.list('/concerts').push(concert);
  }
  
  getAll() {
    return this.db.list('/concerts');
  }
  
  get(concertId) {
    return this.db.object('/concerts/' + concertId);
  }
  
  update(concertId, concert) {
    return this.db.object('/concerts/' + concertId).update(concert);
  }
  
  delete(concertId) {
    return this.db.object('/concerts/' + concertId).remove();
  }
}
