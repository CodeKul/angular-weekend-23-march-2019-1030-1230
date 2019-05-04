import { TestBed } from '@angular/core/testing';

import { MyService } from './my.service';

describe('MyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyService = TestBed.get(MyService);
    expect(service).toBeTruthy();
  });
});
