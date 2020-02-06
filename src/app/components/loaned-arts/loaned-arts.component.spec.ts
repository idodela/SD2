import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanedArtsComponent } from './loaned-arts.component';

describe('LoanedArtsComponent', () => {
  let component: LoanedArtsComponent;
  let fixture: ComponentFixture<LoanedArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanedArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanedArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
