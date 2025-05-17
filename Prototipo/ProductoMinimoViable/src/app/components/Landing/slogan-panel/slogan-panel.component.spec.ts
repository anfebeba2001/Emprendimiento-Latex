import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganPanelComponent } from './slogan-panel.component';

describe('SloganPanelComponent', () => {
  let component: SloganPanelComponent;
  let fixture: ComponentFixture<SloganPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SloganPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloganPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
