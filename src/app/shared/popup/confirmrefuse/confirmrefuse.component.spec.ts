import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmrefuseComponent } from './confirmrefuse.component';

describe('ConfirmrefuseComponent', () => {
  let component: ConfirmrefuseComponent;
  let fixture: ComponentFixture<ConfirmrefuseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmrefuseComponent]
    });
    fixture = TestBed.createComponent(ConfirmrefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
