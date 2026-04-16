import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  //1. Add method onLogin that accepts an event with mode property. Mode should be type "login" or "register"
  //2. Add type annotation for the event parameter
  //3. Add console.log to print the event
  onLogin() {

  }
}

