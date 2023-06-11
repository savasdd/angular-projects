import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodEditComponent } from './kod-edit.component';

describe('KodEditComponent', () => {
  let component: KodEditComponent;
  let fixture: ComponentFixture<KodEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KodEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
