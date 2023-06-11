import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonumListComponent } from './konum-list.component';

describe('KonumListComponent', () => {
  let component: KonumListComponent;
  let fixture: ComponentFixture<KonumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
