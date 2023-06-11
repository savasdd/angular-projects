import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HataListComponent } from './hata-list.component';

describe('HataListComponent', () => {
  let component: HataListComponent;
  let fixture: ComponentFixture<HataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
