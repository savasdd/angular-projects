import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaporKodListComponent } from './rapor-kod-list.component';

describe('RaporKodListComponent', () => {
  let component: RaporKodListComponent;
  let fixture: ComponentFixture<RaporKodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaporKodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaporKodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
