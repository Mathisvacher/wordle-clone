import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleHeaderComponent } from './wordle-header.component';

describe('WordleHeaderComponent', () => {
  let component: WordleHeaderComponent;
  let fixture: ComponentFixture<WordleHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordleHeaderComponent]
    });
    fixture = TestBed.createComponent(WordleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
