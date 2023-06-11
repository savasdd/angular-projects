import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBreakGridComponent } from './profile-break-grid.component';

describe('ProfileBreakGridComponent', () => {
  let component: ProfileBreakGridComponent;
  let fixture: ComponentFixture<ProfileBreakGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileBreakGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileBreakGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
