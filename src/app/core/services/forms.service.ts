import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormsService {
  constructor(private fb: FormBuilder) {}

  buildLoginForm(): FormGroup {
    return this.fb.nonNullable.group({
      email: [''],
      password: ['']
    });
  }
}

