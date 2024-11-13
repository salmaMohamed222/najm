import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredCardComponent } from './colored-card.component';

describe('ColoredCardComponent', () => {
  let component: ColoredCardComponent;
  let fixture: ComponentFixture<ColoredCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoredCardComponent]
    });
    fixture = TestBed.createComponent(ColoredCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
