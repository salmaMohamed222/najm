import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClassificationComponent } from './report-classification.component';

describe('ReportClassificationComponent', () => {
  let component: ReportClassificationComponent;
  let fixture: ComponentFixture<ReportClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportClassificationComponent]
    });
    fixture = TestBed.createComponent(ReportClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
