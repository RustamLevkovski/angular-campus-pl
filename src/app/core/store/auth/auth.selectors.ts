
// Select full auth feature state from root store.
// Create selectAuthState:
// - Register reducer under key `'auth'` in app store config.
// - Use `createFeatureSelector<AuthState>('auth')`.
// - Reuse this selector as base for all auth projections.


// Select loading flag for login flow UI states.
// Create selectAuthLoading selector:
// - Use `createSelector(selectAuthState, state => state.loading)`.
// - Keep projector focused on one field only.


// Select auth error message/value for UI error display.
// Create selectAuthError selector:
// - Use `createSelector(selectAuthState, state => state.error)`.
// - Return nullable value to support "no error" state.


// Select current authentication status.
// Create selectIsAuthenticated selector:
// - Use `createSelector(selectAuthState, state => state.isAuthenticated)`.
// - Use this selector in route guards and protected layout logic.


