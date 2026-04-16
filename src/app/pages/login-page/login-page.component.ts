import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../../shared/components/auth-form/auth-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, AuthFormComponent],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  onLogin($event: { mode: "login" | "register"; }) {
    console.log($event);
  }
}

