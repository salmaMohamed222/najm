import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullButtonComponent } from './full-button.component';

describe('FullButtonComponent', () => {
  let component: FullButtonComponent;
  let fixture: ComponentFixture<FullButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullButtonComponent]
    });
    fixture = TestBed.createComponent(FullButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
