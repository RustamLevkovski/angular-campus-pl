import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { JsPageComponent } from './pages/js-page/js-page.component';
import { CommonWebdevPageComponent } from './pages/common-webdev-page/common-webdev-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

// Steps to implement:
// - Import `Routes` from `@angular/router`.
// - Import each page and layout component that will be used in route definitions.
// - Export a constant `routes` typed as `Routes` and assign it an array of route objects.
// - Add a root redirect route (`path: ''`) so the app opens on a default page.
// - Group authentication pages under an `auth` parent route with `AuthLayoutComponent`.
// - Add child routes for `login` and `register`, plus a default child redirect to `login`.
// - Group main content pages under a parent route that uses `ContentLayoutComponent`.
// - Add child routes for each content page (`angular`, `javascript`, `webdev`).
// - Add a wildcard (`'**'`) route at the end to handle unknown URLs with a not-found page.
// - Keep route order intentional: specific routes first, wildcard last.
export const routes: Routes = [
];