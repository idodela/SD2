import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuurformolierComponent } from './huurformolier.component';

describe('HuurformolierComponent', () => {
  let component: HuurformolierComponent;
  let fixture: ComponentFixture<HuurformolierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuurformolierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuurformolierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
