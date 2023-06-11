import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HizmetListComponent } from './hizmet-list.component';

describe('HizmetListComponent', () => {
  let component: HizmetListComponent;
  let fixture: ComponentFixture<HizmetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HizmetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HizmetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
