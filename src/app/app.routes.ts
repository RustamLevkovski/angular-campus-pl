import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { JsPageComponent } from './pages/js-page/js-page.component';
import { CommonWebdevPageComponent } from './pages/common-webdev-page/common-webdev-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginPageComponent },
            { path: 'register', component: RegisterPageComponent },
            { path: '', pathMatch: 'full', redirectTo: 'login' }
        ]
    },
    {
        path: '',
        component: ContentLayoutComponent,
        children: [
            { path: 'angular', component: AngularPageComponent },
            { path: 'javascript', component: JsPageComponent },
            { path: 'webdev', component: CommonWebdevPageComponent }
        ]
    },
    { path: '**', component: NotFoundPageComponent }
];