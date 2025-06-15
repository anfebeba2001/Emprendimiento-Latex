import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySideViewComponent } from './company-side-view.component';

describe('CompanySideViewComponent', () => {
  let component: CompanySideViewComponent;
  let fixture: ComponentFixture<CompanySideViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanySideViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySideViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
