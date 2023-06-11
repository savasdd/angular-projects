import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolGrupEditComponent } from './rol-grup-edit.component';

describe('RolGrupEditComponent', () => {
  let component: RolGrupEditComponent;
  let fixture: ComponentFixture<RolGrupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolGrupEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolGrupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
