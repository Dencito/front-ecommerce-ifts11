import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePrdComponent } from './single-prd.component';

describe('SinglePrdComponent', () => {
  let component: SinglePrdComponent;
  let fixture: ComponentFixture<SinglePrdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePrdComponent]
    });
    fixture = TestBed.createComponent(SinglePrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
