import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntPathComponent } from './ant-path.component';

describe('AntPathComponent', () => {
  let component: AntPathComponent;
  let fixture: ComponentFixture<AntPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
