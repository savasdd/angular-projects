import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrenimListComponent } from './ogrenim-list.component';

describe('OgrenimListComponent', () => {
  let component: OgrenimListComponent;
  let fixture: ComponentFixture<OgrenimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgrenimListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OgrenimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
