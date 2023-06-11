import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaporPersonelListComponent } from './rapor-personel-list.component';

describe('RaporPersonelListComponent', () => {
  let component: RaporPersonelListComponent;
  let fixture: ComponentFixture<RaporPersonelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaporPersonelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaporPersonelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
