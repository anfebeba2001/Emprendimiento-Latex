import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSlideComponent } from './review-slide.component';

describe('ReviewSlideComponent', () => {
  let component: ReviewSlideComponent;
  let fixture: ComponentFixture<ReviewSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
