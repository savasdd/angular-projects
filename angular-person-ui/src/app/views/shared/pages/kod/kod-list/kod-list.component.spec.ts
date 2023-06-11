import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodListComponent } from './kod-list.component';

describe('KodListComponent', () => {
  let component: KodListComponent;
  let fixture: ComponentFixture<KodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
