import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleKeyboardComponent } from './wordle-keyboard.component';

describe('WordleKeyboardComponent', () => {
  let component: WordleKeyboardComponent;
  let fixture: ComponentFixture<WordleKeyboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordleKeyboardComponent]
    });
    fixture = TestBed.createComponent(WordleKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
