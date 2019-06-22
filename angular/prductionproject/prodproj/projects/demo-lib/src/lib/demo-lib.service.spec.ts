import { TestBed } from '@angular/core/testing';

import { DemoLibService } from './demo-lib.service';

describe('DemoLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoLibService = TestBed.get(DemoLibService);
    expect(service).toBeTruthy();
  });
});
