import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponantComponent } from './form-componant.component';

describe('FormComponantComponent', () => {
  let component: FormComponantComponent;
  let fixture: ComponentFixture<FormComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
