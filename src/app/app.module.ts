import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleComponent } from './wordle/wordle.component';
import { WordleHeaderComponent } from './wordle/wordle-header/wordle-header.component';
import { WordleGridComponent } from './wordle/wordle-grid/wordle-grid.component';
import { WordleKeyboardComponent } from './wordle/wordle-keyboard/wordle-keyboard.component';
import { WordleKeyboardLetterComponent } from './wordle/wordle-keyboard/wordle-keyboard-letter/wordle-keyboard-letter.component';

@NgModule({
  declarations: [
    AppComponent,
    WordleComponent,
    WordleHeaderComponent,
    WordleGridComponent,
    WordleKeyboardComponent,
    WordleKeyboardLetterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
