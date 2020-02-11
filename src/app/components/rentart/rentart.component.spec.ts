import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentartComponent } from './rentart.component';

describe('HuurformolierComponent', () => {
  let component: RentartComponent;
  let fixture: ComponentFixture<RentartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
