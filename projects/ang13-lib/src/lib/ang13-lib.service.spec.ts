import { TestBed } from '@angular/core/testing';

import { Ang13LibService } from './ang13-lib.service';

describe('Ang13LibService', () => {
  let service: Ang13LibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ang13LibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
