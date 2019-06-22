import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLibComponent } from './demo-lib.component';

describe('DemoLibComponent', () => {
  let component: DemoLibComponent;
  let fixture: ComponentFixture<DemoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
