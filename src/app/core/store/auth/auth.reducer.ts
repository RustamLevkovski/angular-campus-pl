// Lesson 5. (NgRx disabled) import { createReducer, on } from '@ngrx/store';
// Lesson 5. (NgRx disabled) import * as AuthActions from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
  loading: boolean;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  error: null,
  loading: false,
};

// Lesson 5. (NgRx disabled) export const authReducer = createReducer(
// Lesson 5. (NgRx disabled)   initialState,
// Lesson 5. (NgRx disabled)   on(AuthActions.login, (state) => ({ ...state, loading: true, error: null })),
// Lesson 5. (NgRx disabled)   on(AuthActions.loginSuccess, (state, { token }) => ({
// Lesson 5. (NgRx disabled)     ...state, isAuthenticated: true, token, loading: false
// Lesson 5. (NgRx disabled)   })),
// Lesson 5. (NgRx disabled)   on(AuthActions.loginFailure, (state, { error }) => ({
// Lesson 5. (NgRx disabled)     ...state, isAuthenticated: false, error, loading: false
// Lesson 5. (NgRx disabled)   })),
// Lesson 5. (NgRx disabled)   on(AuthActions.logout, () => initialState)
// Lesson 5. (NgRx disabled) );
export const authReducer = (state: AuthState = initialState, _action: unknown): AuthState => {
  // Lesson 5. (NgRx disabled) No-op reducer placeholder
  return state;
};
