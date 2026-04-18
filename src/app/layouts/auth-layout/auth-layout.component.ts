import { Component } from '@angular/core';
import { RegisterPageComponent } from "../../pages/register-page/register-page.component";
import { LoginPageComponent } from "../../pages/login-page/login-page.component";


@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [ LoginPageComponent, RegisterPageComponent],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent { }

