import { TestBed } from '@angular/core/testing';

import { FirebService } from './fireb.service';

describe('FirebService', () => {
  let service: FirebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
