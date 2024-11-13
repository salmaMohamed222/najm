import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAndFilesComponent } from './photo-and-files.component';

describe('PhotoAndFilesComponent', () => {
  let component: PhotoAndFilesComponent;
  let fixture: ComponentFixture<PhotoAndFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoAndFilesComponent]
    });
    fixture = TestBed.createComponent(PhotoAndFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
