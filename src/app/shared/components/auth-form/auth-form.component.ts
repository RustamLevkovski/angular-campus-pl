import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
  @Output() submitted = new EventEmitter<{ mode: 'login' | 'register' }>();

  loading = false;
  error: string | null = null;

  get title(): string {
    return this.mode === 'login' ? 'Login' : 'Sign up';
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit({ mode: this.mode });
  }

}

