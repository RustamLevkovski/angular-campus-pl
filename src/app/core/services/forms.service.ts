import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormsService {
  constructor(private fb: FormBuilder) {}

  buildLoginForm(): FormGroup {
    // Lesson 4 Disable Services and Routes. return this.fb.nonNullable.group({
    // Lesson 4 Disable Services and Routes.   email: [''],
    // Lesson 4 Disable Services and Routes.   password: ['']
    // Lesson 4 Disable Services and Routes. });
    return this.fb.group({});
  }
}

