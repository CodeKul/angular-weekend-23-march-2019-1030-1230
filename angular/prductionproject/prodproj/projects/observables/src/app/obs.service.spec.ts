import { TestBed } from '@angular/core/testing';

import { ObsService } from './obs.service';

describe('ObsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObsService = TestBed.get(ObsService);
    expect(service).toBeTruthy();
  });
});
