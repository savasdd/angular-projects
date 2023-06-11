import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkulListComponent } from './okul-list.component';

describe('OkulListComponent', () => {
  let component: OkulListComponent;
  let fixture: ComponentFixture<OkulListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkulListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OkulListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
