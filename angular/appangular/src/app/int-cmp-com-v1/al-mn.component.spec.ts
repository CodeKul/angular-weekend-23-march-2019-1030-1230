import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlMnComponent } from './al-mn.component';

describe('AlMnComponent', () => {
  let component: AlMnComponent;
  let fixture: ComponentFixture<AlMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
