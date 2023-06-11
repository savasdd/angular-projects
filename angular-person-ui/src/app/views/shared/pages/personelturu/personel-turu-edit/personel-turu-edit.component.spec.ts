import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelTuruEditComponent } from './personel-turu-edit.component';

describe('PersonelTuruEditComponent', () => {
  let component: PersonelTuruEditComponent;
  let fixture: ComponentFixture<PersonelTuruEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonelTuruEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelTuruEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
