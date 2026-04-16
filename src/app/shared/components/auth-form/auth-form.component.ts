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
  //1. Add @Input() decorator for mode property
  //2. Add type annotation for mode property as 'login' | 'register'
  //3. Initialize mode property with 'login'


  //1. Add @Output() decorator for submitted property
  //2. Add type annotation for submitted property 
  //3. Initialize submitted property with EventEmitter as { mode: 'login' | 'register' }


  loading = false;
  error: string | null = null;

  //1. Add getter for title property
  //2. Return 'Login' if mode is 'login' and 'Sign up' if mode is 'register'
  //3. Add type annotation for title property

  //1. Add method onSubmit that accepts an event with mode property. Mode should be type "login" or "register"
  //2. Add type annotation for the event parameter
  //3. Add console.log to print the event

}

