import { Subscription } from 'rxjs/Subscription';
import { Concert } from './../../models/concert';
import { ConcertService } from './../../concert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-concerts',
  templateUrl: './admin-concerts.component.html',
  styleUrls: ['./admin-concerts.component.css']
})
export class AdminConcertsComponent implements OnInit, OnDestroy {
  concerts: Concert[];
  subscription: Subscription;
  tableResource: DataTableResource<Concert>;
  items: Concert[] = [];
  itemCount: number;

  constructor(private concertService: ConcertService) {
    this.subscription = this.concertService.getAll()
    .subscribe(concerts => {
      this.concerts = concerts;
      this.initializeTable(concerts);
    });
   }
   
   private initializeTable(concerts: Concert[]) {
     this.tableResource = new DataTableResource(concerts);
      this.tableResource.query({ offset: 0 })
        .then(items => this.items = items);
      this.tableResource.count()
        .then(count => this.itemCount = count);
   }
   
   reloadItems(params) {
     if (!this.tableResource) return;
     
     this.tableResource.query(params)
      .then(items => this.items = items);
   }
   
   filter(query: string) {
     let filteredConcerts = (query) ?
      this.concerts.filter(c => c.artist.toLowerCase().includes(query.toLowerCase())) :
      this.concerts;
      
     this.initializeTable(filteredConcerts);
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

  ngOnInit() {
  }

}