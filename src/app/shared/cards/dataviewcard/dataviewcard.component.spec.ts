import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewcardComponent } from './dataviewcard.component';

describe('DataviewcardComponent', () => {
  let component: DataviewcardComponent;
  let fixture: ComponentFixture<DataviewcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataviewcardComponent]
    });
    fixture = TestBed.createComponent(DataviewcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
