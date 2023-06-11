import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakSpesificTimeComponent } from './break-spesific-time.component';

describe('BreakSpesificTimeComponent', () => {
  let component: BreakSpesificTimeComponent;
  let fixture: ComponentFixture<BreakSpesificTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakSpesificTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakSpesificTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
