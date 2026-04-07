import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

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
  loading: false
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, { token }) => ({ 
    ...state, isAuthenticated: true, token, loading: false 
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({ 
    ...state, isAuthenticated: false, error, loading: false 
  })),
  on(AuthActions.logout, () => initialState)
);