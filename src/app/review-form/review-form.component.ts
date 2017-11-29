import { Component, OnInit } from '@angular/core';
import { ReviewService } from './../review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }
  
  save(review) {
    this.reviewService.create(review);
  }

  ngOnInit() {
  }

}
