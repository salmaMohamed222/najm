import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorStructureComponent } from './visitor-structure.component';

describe('VisitorStructureComponent', () => {
  let component: VisitorStructureComponent;
  let fixture: ComponentFixture<VisitorStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorStructureComponent]
    });
    fixture = TestBed.createComponent(VisitorStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
