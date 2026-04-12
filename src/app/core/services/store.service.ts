import { Injectable } from '@angular/core';
// Lesson 5. (NgRx disabled) import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
// Lesson 5. (NgRx disabled) import { selectAuthError, selectAuthLoading } from '../store/auth/auth.selectors';

@Injectable({ providedIn: 'root' })
export class StoreService {
  // Lesson 5. (NgRx disabled) constructor(private store: Store) {}

  selectAuthLoading(): Observable<boolean> {
    // Lesson 5. (NgRx disabled) return this.store.select(selectAuthLoading);
    return of(false);
  }

  selectAuthError(): Observable<unknown> {
    // Lesson 5. (NgRx disabled) return this.store.select(selectAuthError);
    return of(null);
  }
}
