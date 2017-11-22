import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { GenreService } from './genre.service';
import { ConcertService } from './concert.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-4-data-table';
import { SavedConcertsService } from './saved-concerts.service';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { SavedConcertsComponent } from './saved-concerts/saved-concerts.component';
import { SaveSuccessComponent } from './save-success/save-success.component';
import { MyFriendsComponent } from './my-friends/my-friends.component';
import { AdminConcertsComponent } from './admin/admin-concerts/admin-concerts.component';
import { LoginComponent } from './login/login.component';
import { ConcertFormComponent } from './admin/concert-form/concert-form.component';
import { ConcertFilterComponent } from './concerts/concert-filter/concert-filter.component';
import { ConcertCardComponent } from './concert-card/concert-card.component';
import { ConcertQuantityComponent } from './concert-quantity/concert-quantity.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ConcertsComponent,
    SavedConcertsComponent,
    SaveSuccessComponent,
    MyFriendsComponent,
    AdminConcertsComponent,
    LoginComponent,
    ConcertFormComponent,
    ConcertFilterComponent,
    ConcertCardComponent,
    ConcertQuantityComponent,
    ReviewComponent,
    ReviewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { 
        path: '',
        component: ConcertsComponent 
      },
      { 
        path: 'concerts', 
        component: ConcertsComponent 
      },
      { 
        path: 'saved-concerts', 
        component: SavedConcertsComponent, 
        canActivate: [AuthGuard] 
      },
      { 
        path: 'my-friends', 
        component: MyFriendsComponent, 
        canActivate: [AuthGuard] 
      },
      { 
        path: 'save-success', 
        component: SaveSuccessComponent, 
        canActivate: [AuthGuard] 
      },
      { 
        path: 'login', 
        component: LoginComponent 
      },
      {
        path: 'review',
        component: ReviewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'review/new',
        component: ReviewFormComponent,
        canActivate: [AuthGuard]
      },
      
      //admin
      { 
        path: 'admin/concerts',
        component: AdminConcertsComponent,
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/concerts/new',
        component: ConcertFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard] 
      },
      { 
        path: 'admin/concerts/:id',
        component: ConcertFormComponent,
        canActivate: [AuthGuard, AdminAuthGuard] 
      }
    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    GenreService,
    ConcertService,
    SavedConcertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
