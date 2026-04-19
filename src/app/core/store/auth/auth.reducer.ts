

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

// Build reducer for auth state transitions.
// Steps to replicate:
// - Start from `initialState`.
// - Use `on(...)` handlers for each auth action.
// - Always return new objects (immutable updates).
// export const authReducer = createReducer(
  
  // Login request starts loading and clears previous error.
  // on(),
  // Login success stores token, marks authenticated, and stops loading.
  // on(),
  // Login failure stores error, keeps user unauthenticated, and stops loading.
  // on(),
  // Logout resets auth state completely.
  // on()
// );