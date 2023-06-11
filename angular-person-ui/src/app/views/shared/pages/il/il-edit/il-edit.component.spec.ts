import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlEditComponent } from './il-edit.component';

describe('IlEditComponent', () => {
  let component: IlEditComponent;
  let fixture: ComponentFixture<IlEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
