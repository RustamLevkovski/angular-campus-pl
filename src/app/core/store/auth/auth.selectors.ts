// Lesson 5. (NgRx disabled) import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

// Lesson 5. (NgRx disabled) export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectAuthState = ((state: any) => state?.auth) as any;

// Lesson 5. (NgRx disabled) export const selectAuthLoading = createSelector(
// Lesson 5. (NgRx disabled)   selectAuthState,
// Lesson 5. (NgRx disabled)   (state) => state.loading
// Lesson 5. (NgRx disabled) );
export const selectAuthLoading = ((state: AuthState) => state.loading) as any;

// Lesson 5. (NgRx disabled) export const selectAuthError = createSelector(
// Lesson 5. (NgRx disabled)   selectAuthState,
// Lesson 5. (NgRx disabled)   (state) => state.error
// Lesson 5. (NgRx disabled) );
export const selectAuthError = ((state: AuthState) => state.error) as any;
