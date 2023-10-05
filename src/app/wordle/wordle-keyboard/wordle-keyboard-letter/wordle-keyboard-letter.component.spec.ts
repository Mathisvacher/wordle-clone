import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleKeyboardLetterComponent } from './wordle-keyboard-letter.component';

describe('WordleKeyboardLetterComponent', () => {
  let component: WordleKeyboardLetterComponent;
  let fixture: ComponentFixture<WordleKeyboardLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordleKeyboardLetterComponent]
    });
    fixture = TestBed.createComponent(WordleKeyboardLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
