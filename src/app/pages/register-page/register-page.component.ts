import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from '../../shared/components/auth-form/auth-form.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, AuthFormComponent],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent { }
