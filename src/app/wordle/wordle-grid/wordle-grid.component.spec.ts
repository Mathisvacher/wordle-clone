import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleGridComponent } from './wordle-grid.component';

describe('WordleGridComponent', () => {
  let component: WordleGridComponent;
  let fixture: ComponentFixture<WordleGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordleGridComponent]
    });
    fixture = TestBed.createComponent(WordleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
