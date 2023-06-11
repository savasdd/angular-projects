import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumEditComponent } from './kurum-edit.component';

describe('KurumEditComponent', () => {
  let component: KurumEditComponent;
  let fixture: ComponentFixture<KurumEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurumEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
