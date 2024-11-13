import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsSupportingTheSuspicionComponent } from './documents-supporting-the-suspicion.component';

describe('DocumentsSupportingTheSuspicionComponent', () => {
  let component: DocumentsSupportingTheSuspicionComponent;
  let fixture: ComponentFixture<DocumentsSupportingTheSuspicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsSupportingTheSuspicionComponent]
    });
    fixture = TestBed.createComponent(DocumentsSupportingTheSuspicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
