import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutPlannerComponent } from './rout-planner.component';

describe('RoutPlannerComponent', () => {
  let component: RoutPlannerComponent;
  let fixture: ComponentFixture<RoutPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutPlannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
