import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
// Lesson 5. (NgRx disabled) import { provideStore } from '@ngrx/store';
// Lesson 5. (NgRx disabled) import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
// Lesson 5. (NgRx disabled) import { authReducer } from './core/store/auth/auth.reducer';
// Lesson 5. (NgRx disabled) import { AuthEffects } from './core/store/auth/auth.effects';
// Lesson 5. (NgRx disabled) import { sectionsReducer } from './core/store/sections/sections.reducer';
// Lesson 5. (NgRx disabled) import { SectionsEffects } from './core/store/sections/sections.effects';
// Lesson 5. (NgRx disabled) import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideAnimationsAsync(), // Required for Material
    provideHttpClient(),
    // Lesson 5. (NgRx disabled) provideStore({ auth: authReducer, sections: sectionsReducer }),
    // Lesson 5. (NgRx disabled) provideEffects([AuthEffects, SectionsEffects]),
    // Lesson 5. (NgRx disabled) provideStoreDevtools({
    // Lesson 5. (NgRx disabled)   maxAge: 25,
    // Lesson 5. (NgRx disabled)   logOnly: true,
    // Lesson 5. (NgRx disabled) }),
  ],
};
