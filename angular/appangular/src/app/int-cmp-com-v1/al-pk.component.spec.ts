import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlPkComponent } from './al-pk.component';

describe('AlPkComponent', () => {
  let component: AlPkComponent;
  let fixture: ComponentFixture<AlPkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlPkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlPkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
