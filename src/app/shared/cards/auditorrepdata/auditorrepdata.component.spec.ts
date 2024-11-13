import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorrepdataComponent } from './auditorrepdata.component';

describe('AuditorrepdataComponent', () => {
  let component: AuditorrepdataComponent;
  let fixture: ComponentFixture<AuditorrepdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuditorrepdataComponent]
    });
    fixture = TestBed.createComponent(AuditorrepdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
