import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSpesificTimeComponent } from './schedule-spesific-time.component';

describe('ScheduleSpesificTimeComponent', () => {
  let component: ScheduleSpesificTimeComponent;
  let fixture: ComponentFixture<ScheduleSpesificTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSpesificTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleSpesificTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
