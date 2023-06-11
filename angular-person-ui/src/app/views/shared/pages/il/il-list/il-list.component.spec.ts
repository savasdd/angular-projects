import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlListComponent } from './il-list.component';

describe('IlListComponent', () => {
  let component: IlListComponent;
  let fixture: ComponentFixture<IlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
