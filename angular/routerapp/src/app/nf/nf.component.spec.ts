import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfComponent } from './nf.component';

describe('NfComponent', () => {
  let component: NfComponent;
  let fixture: ComponentFixture<NfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
