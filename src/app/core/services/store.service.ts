import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthError, selectAuthLoading } from '../store/auth/auth.selectors';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor(private store: Store) {}

  selectAuthLoading(): Observable<boolean> {
    return this.store.select(selectAuthLoading);
  }

  selectAuthError(): Observable<unknown> {
    return this.store.select(selectAuthError);
  }
}

