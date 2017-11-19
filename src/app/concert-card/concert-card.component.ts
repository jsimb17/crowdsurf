import { Component, OnInit, Input } from '@angular/core';
import { Concert } from './../models/concert';

@Component({
  selector: 'concert-card',
  templateUrl: './concert-card.component.html',
  styleUrls: ['./concert-card.component.css']
})
export class ConcertCardComponent {
  @Input('concert') concert: Concert;
  @Input('show-actions') showActions = true;

  constructor() { }
}
