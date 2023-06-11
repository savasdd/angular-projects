import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciEditComponent } from './kullanici-edit.component';

describe('KullaniciEditComponent', () => {
  let component: KullaniciEditComponent;
  let fixture: ComponentFixture<KullaniciEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
