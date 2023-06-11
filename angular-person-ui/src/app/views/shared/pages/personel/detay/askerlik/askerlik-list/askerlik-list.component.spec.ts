import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskerlikListComponent } from './askerlik-list.component';

describe('AskerlikListComponent', () => {
  let component: AskerlikListComponent;
  let fixture: ComponentFixture<AskerlikListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskerlikListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskerlikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
