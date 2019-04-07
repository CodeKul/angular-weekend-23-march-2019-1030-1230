import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboComponent } from './jumbo.component';

describe('JumboComponent', () => {
  let component: JumboComponent;
  let fixture: ComponentFixture<JumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
