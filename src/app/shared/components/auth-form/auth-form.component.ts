import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule} from '@angular/forms';
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
  // Modify submitted Event Emitter to emit the email and password and mode
  @Output() submitted = new EventEmitter<{ mode: 'login' | 'register' }>();

// Inject the FormBuilder, AuthService, and Router


  loading = false;
  error: string | null = null;

  // Create a form group with the following controls:
  // - email with required and email validators
  // - password with required and minlength(6) validators
  // - confirmPassword with required validators


  get title(): string {
    return this.mode === 'login' ? 'Login' : 'Sign up';
  }

  // Modify onSubmit method to emit the email and password and mode
  onSubmit(event: any) {
    //remove the default behavior
    event.preventDefault();
    this.submitted.emit({ mode: this.mode });
//1. mark all as touched
//2. check if the form is invalid
//3. if invalid, return
//4. if valid, get the email and password values from the form
//5. if mode is register, check if the password and confirm password match and if not, set the error to 'Passwords do not match.' and return
//6. if they don't match, set the error to 'Passwords do not match.' and return
//7. if they match, set the error to null and loading to true. 
// 8. Create constants for the email and password values
// 9. If mode is login, call the authService.login method with the email and password values
//8. Subscribe to the authService.login method and handle the response
// 9. Use next, error and complete callbacks to handle the response
// 10. In the next callback, set the loading to false and navigate to the angular page and emit the email and password and mode
// 11. In the error callback, set the error to the error message and loading to false and emit the error message
// 12. If mode isn't 'login' - set item to localStorage with the key 'angularCampus.user' and the value of the email and password values
// 13. Set the loading to false and emit the email and password and mode
// 14. Navigate to the login page
  }

}
