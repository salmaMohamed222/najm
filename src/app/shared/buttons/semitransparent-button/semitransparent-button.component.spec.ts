import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemitransparentButtonComponent } from './semitransparent-button.component';

describe('SemitransparentButtonComponent', () => {
  let component: SemitransparentButtonComponent;
  let fixture: ComponentFixture<SemitransparentButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemitransparentButtonComponent]
    });
    fixture = TestBed.createComponent(SemitransparentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
