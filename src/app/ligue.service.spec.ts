import { TestBed } from '@angular/core/testing';

import { LigueService } from './ligue.service';

describe('LigueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigueService = TestBed.get(LigueService);
    expect(service).toBeTruthy();
  });
});
