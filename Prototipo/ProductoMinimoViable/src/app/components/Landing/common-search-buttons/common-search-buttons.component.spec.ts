import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSearchButtonsComponent } from './common-search-buttons.component';

describe('CommonSearchButtonsComponent', () => {
  let component: CommonSearchButtonsComponent;
  let fixture: ComponentFixture<CommonSearchButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonSearchButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonSearchButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
