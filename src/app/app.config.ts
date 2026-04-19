import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { AuthEffects } from './core/store/auth/auth.effects';
import { SectionsEffects } from './core/store/sections/sections.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

// Uncomment these line

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideAnimationsAsync(), // Required for Material
    provideHttpClient(),
    // provideStore({ auth: authReducer, sections: sectionsReducer }),
    // provideEffects([AuthEffects, SectionsEffects]),
    // provideStoreDevtools({
   //   maxAge: 25, // Retains last 25 states
    //  logOnly: true, // Restrict extension to log-only mode in production
   // }),
]
};

