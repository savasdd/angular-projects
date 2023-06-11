import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgitimListComponent } from './egitim-list.component';

describe('EgitimListComponent', () => {
  let component: EgitimListComponent;
  let fixture: ComponentFixture<EgitimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgitimListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgitimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
