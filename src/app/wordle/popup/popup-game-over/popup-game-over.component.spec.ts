import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGameOverComponent } from './popup-game-over.component';

describe('PopupGameOverComponent', () => {
  let component: PopupGameOverComponent;
  let fixture: ComponentFixture<PopupGameOverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupGameOverComponent]
    });
    fixture = TestBed.createComponent(PopupGameOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
