import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {
  // Inject actions.
  
  // Inject auth service.
  
  // Inject router for side-effect navigation.
  

  // Create login$ effect
  // Handle login action by calling AuthService and mapping result to success/failure actions.
  // Steps to replicate:
  // - Filter with `ofType(AuthActions.login)`.
  // - Use `mergeMap` to call `authService.login(...)`.
  // - Map token to `loginSuccess`, and errors to `loginFailure`.
  

  // Create loginSuccess$ effect
  // Navigate after successful login without dispatching another action.
  // Steps to replicate:
  // - Filter for `loginSuccess`.
  // - Use `tap` for imperative navigation.
  // - Set `{ dispatch: false }` because this effect does not emit actions.
  
  // Create logout$ effect
  // Navigate user to login screen on logout.
  // Steps to replicate:
  // - Filter for `logout`.
  // - Use `tap` to run router side effect.
  // - Keep `{ dispatch: false }` for pure side-effect behavior.
  
}