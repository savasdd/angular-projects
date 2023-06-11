import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCustomDateComponent } from './schedule-custom-date.component';

describe('ScheduleCustomDateComponent', () => {
  let component: ScheduleCustomDateComponent;
  let fixture: ComponentFixture<ScheduleCustomDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleCustomDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleCustomDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
