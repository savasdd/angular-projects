import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftChartsComponent } from './shift-charts.component';

describe('ShiftChartsComponent', () => {
  let component: ShiftChartsComponent;
  let fixture: ComponentFixture<ShiftChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
