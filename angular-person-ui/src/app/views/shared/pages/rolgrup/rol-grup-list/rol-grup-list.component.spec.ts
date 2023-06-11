import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolGrupListComponent } from './rol-grup-list.component';

describe('RolGrupListComponent', () => {
  let component: RolGrupListComponent;
  let fixture: ComponentFixture<RolGrupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolGrupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolGrupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
