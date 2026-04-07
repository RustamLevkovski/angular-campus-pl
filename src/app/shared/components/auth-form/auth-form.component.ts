import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  @Input() mode: 'login' | 'register' = 'login';
  @Output() submitted = new EventEmitter<{ email: string; password: string; mode: 'login' | 'register' }>();

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loading = false;
  error: string | null = null;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['']
  });

  get title(): string {
    return this.mode === 'login' ? 'Login' : 'Sign up';
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    const { email, password, confirmPassword } = this.form.value;
    if (this.mode === 'register' && password !== confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }

    this.error = null;
    this.loading = true;

    const emailValue = email as string;
    const passwordValue = password as string;

    if (this.mode === 'login') {
      this.authService.login(emailValue, passwordValue).subscribe({
        next: () => {
          this.loading = false;
          this.submitted.emit({ email: emailValue, password: passwordValue, mode: this.mode });
          this.router.navigate(['/angular']);
        },
        error: (err: Error) => {
          this.loading = false;
          this.error = err.message || 'Login failed.';
        }
      });
    } else {
      localStorage.setItem('angularCampus.user', JSON.stringify({ email: emailValue, password: passwordValue }));
      this.loading = false;
      this.submitted.emit({ email: emailValue, password: passwordValue, mode: this.mode });
      this.router.navigate(['/auth/login']);
    }
  }
}

