import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WordleComponent } from './wordle/wordle.component';
import { WordleHeaderComponent } from './wordle/wordle-header/wordle-header.component';
import { WordleGridComponent } from './wordle/wordle-grid/wordle-grid.component';
import { WordleKeyboardComponent } from './wordle/wordle-keyboard/wordle-keyboard.component';
import { WordleKeyboardLetterComponent } from './wordle/wordle-keyboard/wordle-keyboard-letter/wordle-keyboard-letter.component';
import { PopupComponent } from './wordle/popup/popup.component';
import { PopupGameOverComponent } from './wordle/popup/popup-game-over/popup-game-over.component';
import { PopupSettingsComponent } from './wordle/popup/popup-settings/popup-settings.component';
import { PopupHelpComponent } from './wordle/popup/popup-help/popup-help.component';
import { PopupStatsComponent } from './wordle/popup/popup-stats/popup-stats.component';
import { PopupArchiveComponent } from './wordle/popup/popup-archive/popup-archive.component';

@NgModule({
  declarations: [
    AppComponent,
    WordleComponent,
    WordleHeaderComponent,
    WordleGridComponent,
    WordleKeyboardComponent,
    WordleKeyboardLetterComponent,
    PopupComponent,
    PopupGameOverComponent,
    PopupSettingsComponent,
    PopupHelpComponent,
    PopupStatsComponent,
    PopupArchiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
