import { TestBed } from '@angular/core/testing';

import { UserArtService } from './user-art.service';

describe('UserArtService', () => {
  let service: UserArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
