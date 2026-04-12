// Lesson 5. (NgRx disabled) import { selectAuthError, selectAuthLoading } from './auth.selectors';
// Lesson 5. (NgRx disabled) import { AuthState } from './auth.reducer';

describe('auth selectors', () => {
  it.skip('Lesson 5. (NgRx disabled) selector tests are commented out', () => {
    // Lesson 5. (NgRx disabled) intentionally skipped
  });
});

// Lesson 5. (NgRx disabled) describe('auth selectors', () => {
// Lesson 5. (NgRx disabled)   it('selectAuthLoading projects loading', () => {
// Lesson 5. (NgRx disabled)     const state: AuthState = {
// Lesson 5. (NgRx disabled)       isAuthenticated: false,
// Lesson 5. (NgRx disabled)       token: null,
// Lesson 5. (NgRx disabled)       error: null,
// Lesson 5. (NgRx disabled)       loading: true,
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)     expect(selectAuthLoading.projector(state)).toBe(true);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('selectAuthError projects error', () => {
// Lesson 5. (NgRx disabled)     const state: AuthState = {
// Lesson 5. (NgRx disabled)       isAuthenticated: false,
// Lesson 5. (NgRx disabled)       token: null,
// Lesson 5. (NgRx disabled)       error: 'boom',
// Lesson 5. (NgRx disabled)       loading: false,
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)     expect(selectAuthError.projector(state)).toBe('boom');
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled) });
