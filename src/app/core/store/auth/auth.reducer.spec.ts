import { authReducer, initialState } from './auth.reducer';
import * as AuthActions from './auth.actions';

describe('authReducer', () => {
  it('sets loading true on login and clears error', () => {
    const state = { ...initialState, error: 'x' };
    const next = authReducer(state, AuthActions.login({ email: 'a', password: 'b' }));
    expect(next.loading).toBe(true);
    expect(next.error).toBeNull();
  });

  it('sets authenticated state on loginSuccess', () => {
    const state = { ...initialState, loading: true };
    const next = authReducer(state, AuthActions.loginSuccess({ token: 't' }));
    expect(next.isAuthenticated).toBe(true);
    expect(next.token).toBe('t');
    expect(next.loading).toBe(false);
  });

  it('sets error and clears auth on loginFailure', () => {
    const state = { ...initialState, isAuthenticated: true, token: 't', loading: true };
    const next = authReducer(state, AuthActions.loginFailure({ error: 'bad' }));
    expect(next.isAuthenticated).toBe(false);
    expect(next.token).toBe('t'); // reducer doesn't clear token explicitly
    expect(next.error).toBe('bad');
    expect(next.loading).toBe(false);
  });

  it('resets to initialState on logout', () => {
    const state = { isAuthenticated: true, token: 't', error: 'e', loading: true };
    const next = authReducer(state as any, AuthActions.logout());
    expect(next).toEqual(initialState);
  });
});

