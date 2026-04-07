import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { FormsService } from './forms.service';

describe('FormsService', () => {
  it('buildLoginForm creates email/password controls', () => {
    TestBed.configureTestingModule({ providers: [FormBuilder, FormsService] });
    const service = TestBed.inject(FormsService);

    const form = service.buildLoginForm();
    expect(form.controls['email'].value).toBe('');
    expect(form.controls['password'].value).toBe('');

    form.controls['email'].setValue('a@b.com');
    form.controls['password'].setValue('secret');
    expect(form.value).toEqual({ email: 'a@b.com', password: 'secret' });
  });
});

