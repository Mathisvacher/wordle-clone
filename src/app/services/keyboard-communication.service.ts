import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { KEYBOARD_TYPE } from '../enums/keyboardType.enum';

@Injectable({
  providedIn: 'root',
})
export class KeyboardCommunicationService {
  private changeKeyboardEventSubject = new Subject<KEYBOARD_TYPE>();

  emitChangeKeyboardEvent(keyboardType: KEYBOARD_TYPE) {
    this.changeKeyboardEventSubject.next(keyboardType);
  }

  getChangeKeyboardEvent(): Observable<KEYBOARD_TYPE> {
    return this.changeKeyboardEventSubject.asObservable();
  }
}
