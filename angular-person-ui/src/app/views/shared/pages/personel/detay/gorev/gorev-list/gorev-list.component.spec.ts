import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevListComponent } from './gorev-list.component';

describe('GorevListComponent', () => {
  let component: GorevListComponent;
  let fixture: ComponentFixture<GorevListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GorevListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GorevListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
