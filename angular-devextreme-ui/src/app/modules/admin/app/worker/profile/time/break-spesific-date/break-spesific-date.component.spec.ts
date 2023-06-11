import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakSpesificDateComponent } from './break-spesific-date.component';

describe('BreakSpesificDateComponent', () => {
  let component: BreakSpesificDateComponent;
  let fixture: ComponentFixture<BreakSpesificDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakSpesificDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakSpesificDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
