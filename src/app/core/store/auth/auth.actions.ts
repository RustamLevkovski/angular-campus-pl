// Lesson 5. (NgRx disabled) import { createAction, props } from '@ngrx/store';

// Lesson 5. (NgRx disabled) export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());
// Lesson 5. (NgRx disabled) export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string }>());
// Lesson 5. (NgRx disabled) export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());
// Lesson 5. (NgRx disabled) export const logout = createAction('[Auth] Logout');

export const login = (payload: { email: string; password: string }) =>
  ({ type: '[Auth] Login', ...payload }) as const;
export const loginSuccess = (payload: { token: string }) =>
  ({ type: '[Auth] Login Success', ...payload }) as const;
export const loginFailure = (payload: { error: string }) =>
  ({ type: '[Auth] Login Failure', ...payload }) as const;
export const logout = () => ({ type: '[Auth] Logout' }) as const;
