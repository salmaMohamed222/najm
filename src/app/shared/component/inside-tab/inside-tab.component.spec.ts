import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideTabComponent } from './inside-tab.component';

describe('InsideTabComponent', () => {
  let component: InsideTabComponent;
  let fixture: ComponentFixture<InsideTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsideTabComponent]
    });
    fixture = TestBed.createComponent(InsideTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
