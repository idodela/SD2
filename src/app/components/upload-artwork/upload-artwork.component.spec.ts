import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArtworkComponent } from './upload-artwork.component';

describe('UploadArtworkComponent', () => {
  let component: UploadArtworkComponent;
  let fixture: ComponentFixture<UploadArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
