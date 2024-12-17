import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousLocationComponent } from './hous-location.component';

describe('HousLocationComponent', () => {
  let component: HousLocationComponent;
  let fixture: ComponentFixture<HousLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HousLocationComponent]
    });
    fixture = TestBed.createComponent(HousLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
