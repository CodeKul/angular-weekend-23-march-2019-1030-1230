import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRefContVwChildComponent } from './local-ref-cont-vw-child.component';

describe('LocalRefContVwChildComponent', () => {
  let component: LocalRefContVwChildComponent;
  let fixture: ComponentFixture<LocalRefContVwChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalRefContVwChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalRefContVwChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
