import { Injectable } from '@angular/core';
// Lesson 5. (NgRx disabled) import { inject } from '@angular/core';
// Lesson 5. (NgRx disabled) import { Actions, createEffect, ofType } from '@ngrx/effects';
// Lesson 5. (NgRx disabled) import { catchError, map, mergeMap, of, tap } from 'rxjs';
// Lesson 5. (NgRx disabled) import * as AuthActions from './auth.actions';
// Lesson 5. (NgRx disabled) import { Router } from '@angular/router';
// Lesson 5. (NgRx disabled) import { AuthService } from '../../services/auth.service';
//
// Lesson 5. (NgRx disabled) @Injectable()
// Lesson 5. (NgRx disabled) export class AuthEffects {
// Lesson 5. (NgRx disabled)   private actions$ = inject(Actions);
// Lesson 5. (NgRx disabled)   private authService = inject(AuthService);
// Lesson 5. (NgRx disabled)   private router = inject(Router);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   login$ = createEffect(() => this.actions$.pipe(
// Lesson 5. (NgRx disabled)     ofType(AuthActions.login),
// Lesson 5. (NgRx disabled)     mergeMap(({ email, password }) => this.authService.login(email, password).pipe(
// Lesson 5. (NgRx disabled)       map(token => AuthActions.loginSuccess({ token })),
// Lesson 5. (NgRx disabled)       catchError(error => of(AuthActions.loginFailure({ error: 'Invalid Credentials' })))
// Lesson 5. (NgRx disabled)     ))
// Lesson 5. (NgRx disabled)   ));
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   loginSuccess$ = createEffect(() => this.actions$.pipe(
// Lesson 5. (NgRx disabled)     ofType(AuthActions.loginSuccess),
// Lesson 5. (NgRx disabled)     tap(() => this.router.navigate(['/dashboard']))
// Lesson 5. (NgRx disabled)   ), { dispatch: false });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   logout$ = createEffect(() => this.actions$.pipe(
// Lesson 5. (NgRx disabled)     ofType(AuthActions.logout),
// Lesson 5. (NgRx disabled)     tap(() => this.router.navigate(['/login']))
// Lesson 5. (NgRx disabled)   ), { dispatch: false });
// Lesson 5. (NgRx disabled) }

@Injectable()
export class AuthEffects {
  // Lesson 5. (NgRx disabled) placeholder class (see commented NgRx implementation above)
}
