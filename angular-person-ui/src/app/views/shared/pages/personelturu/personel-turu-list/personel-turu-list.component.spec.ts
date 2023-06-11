import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelTuruListComponent } from './personel-turu-list.component';

describe('PersonelTuruListComponent', () => {
  let component: PersonelTuruListComponent;
  let fixture: ComponentFixture<PersonelTuruListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonelTuruListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelTuruListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
