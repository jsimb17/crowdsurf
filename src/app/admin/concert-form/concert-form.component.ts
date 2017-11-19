import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GenreService } from './../../genre.service';
import { ConcertService } from './../../concert.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-concert-form',
  templateUrl: './concert-form.component.html',
  styleUrls: ['./concert-form.component.css']
})
export class ConcertFormComponent implements OnInit {
  genres$;
  concert = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private genreService: GenreService,
     private concertService: ConcertService) {
    this.genres$ = genreService.getAll();
    
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.concertService.get(this.id).take(1).subscribe(c => this.concert = c);
   }
   
   save(concert) {
     if (this.id) this.concertService.update(this.id, concert);
     else this.concertService.create(concert);
     
     this.router.navigate(['/admin/concerts']);
   }

  delete() {
    if (!confirm('Are you sure you want to delete this concert?')) return; 
      
      this.concertService.delete(this.id);
      this.router.navigate(['/admin/concerts']);
  }

  ngOnInit() {
  }

}