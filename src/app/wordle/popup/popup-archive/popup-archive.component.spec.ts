import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupArchiveComponent } from './popup-archive.component';

describe('PopupArchiveComponent', () => {
  let component: PopupArchiveComponent;
  let fixture: ComponentFixture<PopupArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupArchiveComponent]
    });
    fixture = TestBed.createComponent(PopupArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
