import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakCustomDateComponent } from './break-custom-date.component';

describe('BreakCustomDateComponent', () => {
  let component: BreakCustomDateComponent;
  let fixture: ComponentFixture<BreakCustomDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakCustomDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakCustomDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
