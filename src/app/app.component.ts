import { Component } from '@angular/core';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { JsPageComponent } from './pages/js-page/js-page.component';
import { CommonWebdevPageComponent } from './pages/common-webdev-page/common-webdev-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { TopNavbarComponent } from './shared/components/top-navbar/top-navbar.component';
import { LeftSideMenuComponent } from './shared/components/left-side-menu/left-side-menu.component';
// Lesson 4 Disable Services and Routes. import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AngularPageComponent,
    JsPageComponent,
    CommonWebdevPageComponent,
    NotFoundPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    TopNavbarComponent,
    LeftSideMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

