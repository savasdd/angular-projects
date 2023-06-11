import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamikComponent } from './dinamik.component';

describe('DinamikComponent', () => {
  let component: DinamikComponent;
  let fixture: ComponentFixture<DinamikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
