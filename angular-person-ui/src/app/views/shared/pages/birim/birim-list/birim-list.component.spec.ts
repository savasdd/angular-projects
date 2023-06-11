import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirimListComponent } from './birim-list.component';

describe('BirimListComponent', () => {
  let component: BirimListComponent;
  let fixture: ComponentFixture<BirimListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirimListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
