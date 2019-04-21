import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntCmpComV1Component } from './int-cmp-com-v1.component';

describe('IntCmpComV1Component', () => {
  let component: IntCmpComV1Component;
  let fixture: ComponentFixture<IntCmpComV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntCmpComV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntCmpComV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
