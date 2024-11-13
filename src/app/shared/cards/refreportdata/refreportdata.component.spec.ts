import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreportdataComponent } from './refreportdata.component';

describe('RefreportdataComponent', () => {
  let component: RefreportdataComponent;
  let fixture: ComponentFixture<RefreportdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefreportdataComponent]
    });
    fixture = TestBed.createComponent(RefreportdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
