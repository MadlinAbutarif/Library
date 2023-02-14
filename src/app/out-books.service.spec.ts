import { TestBed } from '@angular/core/testing';

import { OutBooksService } from './books-out';

describe('OutBooksService', () => {
  let service: OutBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
