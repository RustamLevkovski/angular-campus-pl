import { Component } from '@angular/core';
import { ContentLayoutComponent } from "./layouts/content-layout/content-layout.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentLayoutComponent, NotFoundPageComponent, AuthLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }

