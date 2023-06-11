import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirimEditComponent } from './birim-edit.component';

describe('BirimEditComponent', () => {
  let component: BirimEditComponent;
  let fixture: ComponentFixture<BirimEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirimEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
