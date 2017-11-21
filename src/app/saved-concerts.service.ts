import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Concert } from './models/concert';
import { SavedConcerts } from './models/saved-concerts';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class SavedConcertsService {

  constructor(private db: AngularFireDatabase) { }
  
  private create() {
    return this.db.list('/saved-concerts').push({
      dateCreated: new Date().getTime()
    });
  }
  
 async getSavedConcerts(): Promise<Observable<SavedConcerts>> {
    let savedConcertsId = await this.getOrCreateSavedConcertsId();
    return this.db.object('/saved-concerts/' + savedConcertsId)
     .map(x => new SavedConcerts(x.items));
  }
  
  private getItem(savedConcertsId: string, concertId: string) {
    return this.db.object('/saved-concerts/' + savedConcertsId + '/items/' + concertId);
  }

  private async getOrCreateSavedConcertsId(): Promise<string> {
    let savedConcertsId = localStorage.getItem('savedConcertsId');
    if (savedConcertsId) return savedConcertsId;
    
      let result = await this.create();
      localStorage.setItem('savedConcertsId', result.key);
       return result.key;    
  }
  
  async addToSavedConcerts(concert: Concert){
    this.updateItemQuantity(concert, 1);
  }
  
  async removeFromSavedConcerts(concert: Concert) {
    this.updateItemQuantity(concert, -1);
  }
  
  private async updateItemQuantity(concert: Concert, change: number) {
    let savedConcertsId = await this.getOrCreateSavedConcertsId();
    let item$ = this.getItem(savedConcertsId, concert.$key);
    //TO DO: remove quantity detail from saved concerts
    item$.take(1).subscribe(item => {
      item$.update({ concert: concert, quantity: (item.quantity || 0) + change });
    }); 
  }
}
