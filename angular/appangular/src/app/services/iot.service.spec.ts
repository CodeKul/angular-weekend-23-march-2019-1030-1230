import { TestBed } from '@angular/core/testing';

import { IotService } from './iot.service';

describe('IotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IotService = TestBed.get(IotService);
    expect(service).toBeTruthy();
  });
});
