import { TestBed } from '@angular/core/testing';

import { LoanedArtsService } from './loaned-arts.service';

describe('LoanedArtsService', () => {
  let service: LoanedArtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanedArtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
