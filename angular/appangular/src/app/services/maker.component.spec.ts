import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerComponent } from './maker.component';

describe('MakerComponent', () => {
  let component: MakerComponent;
  let fixture: ComponentFixture<MakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
