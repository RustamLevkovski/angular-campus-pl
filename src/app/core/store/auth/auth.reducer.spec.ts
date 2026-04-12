// Lesson 5. (NgRx disabled) import { authReducer, initialState } from './auth.reducer';
// Lesson 5. (NgRx disabled) import * as AuthActions from './auth.actions';

describe('authReducer', () => {
  it.skip('Lesson 5. (NgRx disabled) reducer tests are commented out', () => {
    // Lesson 5. (NgRx disabled) intentionally skipped
  });
});

// Lesson 5. (NgRx disabled) describe('authReducer', () => {
// Lesson 5. (NgRx disabled)   it('sets loading true on login and clears error', () => {
// Lesson 5. (NgRx disabled)     const state = { ...initialState, error: 'x' };
// Lesson 5. (NgRx disabled)     const next = authReducer(state, AuthActions.login({ email: 'a', password: 'b' }));
// Lesson 5. (NgRx disabled)     expect(next.loading).toBe(true);
// Lesson 5. (NgRx disabled)     expect(next.error).toBeNull();
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('sets authenticated state on loginSuccess', () => {
// Lesson 5. (NgRx disabled)     const state = { ...initialState, loading: true };
// Lesson 5. (NgRx disabled)     const next = authReducer(state, AuthActions.loginSuccess({ token: 't' }));
// Lesson 5. (NgRx disabled)     expect(next.isAuthenticated).toBe(true);
// Lesson 5. (NgRx disabled)     expect(next.token).toBe('t');
// Lesson 5. (NgRx disabled)     expect(next.loading).toBe(false);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('sets error and clears auth on loginFailure', () => {
// Lesson 5. (NgRx disabled)     const state = { ...initialState, isAuthenticated: true, token: 't', loading: true };
// Lesson 5. (NgRx disabled)     const next = authReducer(state, AuthActions.loginFailure({ error: 'bad' }));
// Lesson 5. (NgRx disabled)     expect(next.isAuthenticated).toBe(false);
// Lesson 5. (NgRx disabled)     expect(next.token).toBe('t'); (reducer doesn't clear token explicitly)
// Lesson 5. (NgRx disabled)     expect(next.error).toBe('bad');
// Lesson 5. (NgRx disabled)     expect(next.loading).toBe(false);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('resets to initialState on logout', () => {
// Lesson 5. (NgRx disabled)     const state = { isAuthenticated: true, token: 't', error: 'e', loading: true };
// Lesson 5. (NgRx disabled)     const next = authReducer(state as any, AuthActions.logout());
// Lesson 5. (NgRx disabled)     expect(next).toEqual(initialState);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled) });
