import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDishesComponent } from './additional-dishes.component';

describe('AdditionalDishesComponent', () => {
  let component: AdditionalDishesComponent;
  let fixture: ComponentFixture<AdditionalDishesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionalDishesComponent]
    });
    fixture = TestBed.createComponent(AdditionalDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
