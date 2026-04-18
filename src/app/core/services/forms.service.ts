import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormsService {
  // Steps to implement:
  // - Inject `FormBuilder` in the constructor so this service can create reactive forms.
  // - Store it as a private property to keep form creation logic centralized in this service.


  // Steps to implement:
  // - Create a new non-nullable `FormGroup` using `this.fb.nonNullable.group(...)`.
  // - Add the controls needed by the login page:
  //   - `email` with an empty string default
  //   - `password` with an empty string default
  // - Return the created `FormGroup` so components can bind to it.
  buildLoginForm() {

  }
}
