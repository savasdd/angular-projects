import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkulEditComponent } from './okul-edit.component';

describe('OkulEditComponent', () => {
  let component: OkulEditComponent;
  let fixture: ComponentFixture<OkulEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkulEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkulEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
