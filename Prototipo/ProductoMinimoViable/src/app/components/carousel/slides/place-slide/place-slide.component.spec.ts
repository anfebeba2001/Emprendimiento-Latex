import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceSlideComponent } from './place-slide.component';

describe('PlaceSlideComponent', () => {
  let component: PlaceSlideComponent;
  let fixture: ComponentFixture<PlaceSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
