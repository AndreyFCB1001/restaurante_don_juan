import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrepesWafflesComponent } from './crepes-waffles.component';

describe('CrepesWafflesComponent', () => {
  let component: CrepesWafflesComponent;
  let fixture: ComponentFixture<CrepesWafflesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrepesWafflesComponent]
    });
    fixture = TestBed.createComponent(CrepesWafflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
