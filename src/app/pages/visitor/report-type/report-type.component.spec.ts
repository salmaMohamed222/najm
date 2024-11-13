import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTypeComponent } from './report-type.component';

describe('ReportTypeComponent', () => {
  let component: ReportTypeComponent;
  let fixture: ComponentFixture<ReportTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportTypeComponent]
    });
    fixture = TestBed.createComponent(ReportTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
