import { SavedConcertsService } from './../saved-concerts.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-concerts',
  templateUrl: './saved-concerts.component.html',
  styleUrls: ['./saved-concerts.component.css']
})
export class SavedConcertsComponent implements OnInit {
  savedConcerts$;

  constructor(private savedConcertsService: SavedConcertsService) { }

  async ngOnInit() {
    this.savedConcerts$ = await this.savedConcertsService.getSavedConcerts();
  }

}
