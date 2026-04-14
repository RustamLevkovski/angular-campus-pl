// Lesson 4 Disable Services and Routes. import { TestBed } from '@angular/core/testing';
// Lesson 4 Disable Services and Routes. import { FormBuilder } from '@angular/forms';
// Lesson 4 Disable Services and Routes. import { FormsService } from './forms.service';

describe('FormsService', () => {
  it.skip('Lesson 4 Disable Services and Routes. FormsService tests are commented out (service disabled)', () => {
    // Lesson 4 Disable Services and Routes. intentionally skipped
  });
});

// Lesson 4 Disable Services and Routes. describe('FormsService', () => {
// Lesson 4 Disable Services and Routes.   it('buildLoginForm creates email/password controls', () => {
// Lesson 4 Disable Services and Routes.     TestBed.configureTestingModule({ providers: [FormBuilder, FormsService] });
// Lesson 4 Disable Services and Routes.     const service = TestBed.inject(FormsService);
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const form = service.buildLoginForm();
// Lesson 4 Disable Services and Routes.     expect(form.controls['email'].value).toBe('');
// Lesson 4 Disable Services and Routes.     expect(form.controls['password'].value).toBe('');
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     form.controls['email'].setValue('a@b.com');
// Lesson 4 Disable Services and Routes.     form.controls['password'].setValue('secret');
// Lesson 4 Disable Services and Routes.     expect(form.value).toEqual({ email: 'a@b.com', password: 'secret' });
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes. });

