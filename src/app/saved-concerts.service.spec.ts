import { TestBed, inject } from '@angular/core/testing';

import { SavedConcertsService } from './saved-concerts.service';

describe('SavedConcertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedConcertsService]
    });
  });

  it('should be created', inject([SavedConcertsService], (service: SavedConcertsService) => {
    expect(service).toBeTruthy();
  }));
});
