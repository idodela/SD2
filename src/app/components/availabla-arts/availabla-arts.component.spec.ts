import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablaArtsComponent } from './availabla-arts.component';

describe('AvailablaArtsComponent', () => {
  let component: AvailablaArtsComponent;
  let fixture: ComponentFixture<AvailablaArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablaArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablaArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
