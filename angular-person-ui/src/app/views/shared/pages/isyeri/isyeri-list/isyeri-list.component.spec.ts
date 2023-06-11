import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsyeriListComponent } from './isyeri-list.component';

describe('IsyeriListComponent', () => {
  let component: IsyeriListComponent;
  let fixture: ComponentFixture<IsyeriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsyeriListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsyeriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
