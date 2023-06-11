import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslemListComponent } from './islem-list.component';

describe('IslemListComponent', () => {
  let component: IslemListComponent;
  let fixture: ComponentFixture<IslemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
