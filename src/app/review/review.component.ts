import { Component, OnInit } from '@angular/core';
import { ReviewService } from './../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews$;
  
  constructor(private reviewService: ReviewService) {
    this.reviews$ = this.reviewService.getAll();
   }

  ngOnInit() {
  }

}
