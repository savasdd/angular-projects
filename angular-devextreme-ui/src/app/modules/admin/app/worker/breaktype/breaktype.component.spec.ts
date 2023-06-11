import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaktypeComponent } from './breaktype.component';

describe('BreaktypeComponent', () => {
  let component: BreaktypeComponent;
  let fixture: ComponentFixture<BreaktypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreaktypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreaktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
