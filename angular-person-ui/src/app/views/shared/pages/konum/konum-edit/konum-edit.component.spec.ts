import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonumEditComponent } from './konum-edit.component';

describe('KonumEditComponent', () => {
  let component: KonumEditComponent;
  let fixture: ComponentFixture<KonumEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonumEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonumEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
