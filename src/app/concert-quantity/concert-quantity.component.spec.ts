import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertQuantityComponent } from './concert-quantity.component';

describe('ConcertQuantityComponent', () => {
  let component: ConcertQuantityComponent;
  let fixture: ComponentFixture<ConcertQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
