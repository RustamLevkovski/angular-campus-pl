import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StoreService {
  // Inject NgRx Store so this service can expose typed read-only selectors to components.
  // Steps to replicate:
  constructor() {}

  // Return the current auth loading state as an observable boolean.
  // - Create a method `selectAuthLoading`
  // - Call `this.store.select(selectAuthLoading)` to subscribe to that slice.
  // - Return the observable directly so components can use `| async`.



  // - Create `selectAuthError` method.
  // - Use `this.store.select(selectAuthError)` to project that value.
  // - Keep the return type broad (`Observable<unknown>`) if error type can vary.

}

