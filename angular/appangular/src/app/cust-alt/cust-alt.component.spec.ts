import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAltComponent } from './cust-alt.component';

describe('CustAltComponent', () => {
  let component: CustAltComponent;
  let fixture: ComponentFixture<CustAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
