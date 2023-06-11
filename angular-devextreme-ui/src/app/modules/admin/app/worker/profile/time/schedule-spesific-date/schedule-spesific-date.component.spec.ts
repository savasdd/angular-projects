import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSpesificDateComponent } from './schedule-spesific-date.component';

describe('ScheduleSpesificDateComponent', () => {
  let component: ScheduleSpesificDateComponent;
  let fixture: ComponentFixture<ScheduleSpesificDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSpesificDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleSpesificDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
