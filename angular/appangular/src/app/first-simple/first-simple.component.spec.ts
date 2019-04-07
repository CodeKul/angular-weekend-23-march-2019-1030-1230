import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSimpleComponent } from './first-simple.component';

describe('FirstSimpleComponent', () => {
  let component: FirstSimpleComponent;
  let fixture: ComponentFixture<FirstSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
