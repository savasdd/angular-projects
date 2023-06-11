import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakCarouselCardComponent } from './break-carousel-card.component';

describe('BreakCarouselCardComponent', () => {
  let component: BreakCarouselCardComponent;
  let fixture: ComponentFixture<BreakCarouselCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakCarouselCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakCarouselCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
