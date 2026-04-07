import { selectAuthError, selectAuthLoading } from './auth.selectors';
import { AuthState } from './auth.reducer';

describe('auth selectors', () => {
  it('selectAuthLoading projects loading', () => {
    const state: AuthState = {
      isAuthenticated: false,
      token: null,
      error: null,
      loading: true,
    };
    expect(selectAuthLoading.projector(state)).toBe(true);
  });

  it('selectAuthError projects error', () => {
    const state: AuthState = {
      isAuthenticated: false,
      token: null,
      error: 'boom',
      loading: false,
    };
    expect(selectAuthError.projector(state)).toBe('boom');
  });
});

