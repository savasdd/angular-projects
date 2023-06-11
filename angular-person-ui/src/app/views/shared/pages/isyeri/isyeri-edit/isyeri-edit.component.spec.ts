import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsyeriEditComponent } from './isyeri-edit.component';

describe('IsyeriEditComponent', () => {
  let component: IsyeriEditComponent;
  let fixture: ComponentFixture<IsyeriEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsyeriEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsyeriEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
