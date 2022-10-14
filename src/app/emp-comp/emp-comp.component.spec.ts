import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCompComponent } from './emp-comp.component';

describe('EmpCompComponent', () => {
  let component: EmpCompComponent;
  let fixture: ComponentFixture<EmpCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
