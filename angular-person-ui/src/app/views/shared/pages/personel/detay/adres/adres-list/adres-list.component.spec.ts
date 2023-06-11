import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresListComponent } from './adres-list.component';

describe('AdresListComponent', () => {
  let component: AdresListComponent;
  let fixture: ComponentFixture<AdresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
