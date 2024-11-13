import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayestablishcardComponent } from './grayestablishcard.component';

describe('GrayestablishcardComponent', () => {
  let component: GrayestablishcardComponent;
  let fixture: ComponentFixture<GrayestablishcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrayestablishcardComponent]
    });
    fixture = TestBed.createComponent(GrayestablishcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
