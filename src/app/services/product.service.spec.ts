import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('ProductService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
