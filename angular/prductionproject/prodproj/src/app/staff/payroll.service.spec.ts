import { TestBed } from '@angular/core/testing';

import { PayrollService } from './payroll.service';

describe('PayrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayrollService = TestBed.get(PayrollService);
    expect(service).toBeTruthy();
  });
});
