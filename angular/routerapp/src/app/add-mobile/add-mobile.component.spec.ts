import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMobileComponent } from './add-mobile.component';

describe('AddMobileComponent', () => {
  let component: AddMobileComponent;
  let fixture: ComponentFixture<AddMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
