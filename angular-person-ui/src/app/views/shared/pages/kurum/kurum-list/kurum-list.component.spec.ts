import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurumListComponent } from './kurum-list.component';

describe('KurumListComponent', () => {
  let component: KurumListComponent;
  let fixture: ComponentFixture<KurumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurumListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
