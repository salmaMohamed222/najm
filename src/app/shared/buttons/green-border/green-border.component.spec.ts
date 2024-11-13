import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBorderComponent } from './green-border.component';

describe('GreenBorderComponent', () => {
  let component: GreenBorderComponent;
  let fixture: ComponentFixture<GreenBorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenBorderComponent]
    });
    fixture = TestBed.createComponent(GreenBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
