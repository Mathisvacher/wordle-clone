import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupStatsComponent } from './popup-stats.component';

describe('PopupStatsComponent', () => {
  let component: PopupStatsComponent;
  let fixture: ComponentFixture<PopupStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupStatsComponent]
    });
    fixture = TestBed.createComponent(PopupStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
