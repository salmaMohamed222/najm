import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefusePopupComponent } from './refuse-popup.component';

describe('RefusePopupComponent', () => {
  let component: RefusePopupComponent;
  let fixture: ComponentFixture<RefusePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefusePopupComponent]
    });
    fixture = TestBed.createComponent(RefusePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
