import { createAction, props } from '@ngrx/store';

// Dispatch when user submits login credentials.
// Steps to replicate:
// - Use `createAction('[Auth] Login', props<{ email: string; password: string }>())`.
// - Keep payload minimal: only fields needed for authentication request.
// - Trigger this action from UI/facade when login starts.
export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());

// Dispatch when login API returns a valid token.
// Steps to replicate:
// - Create success action with token payload.
// - Use this action in reducer to mark user authenticated.
// - Optionally react in effects for post-login navigation.
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string }>());

// Dispatch when login API fails.
// Steps to replicate:
// - Create failure action with an error message payload.
// - Reducer should stop loading and store the error value.
// - UI can display this via selectors.
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

// Dispatch when user logs out.
// Steps to replicate:
// - Create a no-payload action using `createAction('[Auth] Logout')`.
// - Handle it in reducer by resetting auth state to initial values.
export const logout = createAction('[Auth] Logout');