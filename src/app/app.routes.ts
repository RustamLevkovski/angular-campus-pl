import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { JsPageComponent } from './pages/js-page/js-page.component';
import { CommonWebdevPageComponent } from './pages/common-webdev-page/common-webdev-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

// Lesson 4 Disable Services and Routes. export const routes: Routes = [
// Lesson 4 Disable Services and Routes.   { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
// Lesson 4 Disable Services and Routes.   {
// Lesson 4 Disable Services and Routes.     path: 'auth',
// Lesson 4 Disable Services and Routes.     component: AuthLayoutComponent,
// Lesson 4 Disable Services and Routes.     children: [
// Lesson 4 Disable Services and Routes.       { path: 'login', component: LoginPageComponent },
// Lesson 4 Disable Services and Routes.       { path: 'register', component: RegisterPageComponent },
// Lesson 4 Disable Services and Routes.       { path: '', pathMatch: 'full', redirectTo: 'login' }
// Lesson 4 Disable Services and Routes.     ]
// Lesson 4 Disable Services and Routes.   },
// Lesson 4 Disable Services and Routes.   {
// Lesson 4 Disable Services and Routes.     path: '',
// Lesson 4 Disable Services and Routes.     component: ContentLayoutComponent,
// Lesson 4 Disable Services and Routes.     children: [
// Lesson 4 Disable Services and Routes.       { path: 'angular', component: AngularPageComponent },
// Lesson 4 Disable Services and Routes.       { path: 'javascript', component: JsPageComponent },
// Lesson 4 Disable Services and Routes.       { path: 'webdev', component: CommonWebdevPageComponent }
// Lesson 4 Disable Services and Routes.     ]
// Lesson 4 Disable Services and Routes.   },
// Lesson 4 Disable Services and Routes.   { path: '**', component: NotFoundPageComponent }
// Lesson 4 Disable Services and Routes. ];
export const routes: Routes = [];
