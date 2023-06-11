import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelEditComponent } from './personel-edit.component';

describe('PersonelEditComponent', () => {
  let component: PersonelEditComponent;
  let fixture: ComponentFixture<PersonelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonelEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
