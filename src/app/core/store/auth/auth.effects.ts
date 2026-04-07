import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, of, tap } from 'rxjs';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    mergeMap(({ email, password }) => this.authService.login(email, password).pipe(
      map(token => AuthActions.loginSuccess({ token })),
      catchError(error => of(AuthActions.loginFailure({ error: 'Invalid Credentials' })))
    ))
  ));

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.loginSuccess),
    tap(() => this.router.navigate(['/dashboard']))
  ), { dispatch: false });

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(() => this.router.navigate(['/login']))
  ), { dispatch: false });
}