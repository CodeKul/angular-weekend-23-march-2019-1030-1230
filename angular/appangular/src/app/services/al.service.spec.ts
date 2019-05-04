import { TestBed } from '@angular/core/testing';

import { AlService } from './al.service';

describe('AlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlService = TestBed.get(AlService);
    expect(service).toBeTruthy();
  });
});
