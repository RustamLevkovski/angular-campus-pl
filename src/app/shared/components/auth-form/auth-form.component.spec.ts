import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormComponent } from './auth-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';

describe('AuthFormComponent', () => {
  let component: AuthFormComponent;
  let fixture: ComponentFixture<AuthFormComponent>;
  let mockAuthService: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockAuthService = {
      login: vi.fn().mockReturnValue(of('token'))
    };
    mockRouter = {
      navigate: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [AuthFormComponent, NoopAnimationsModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => { 
    fixture.detectChanges();
    expect(component).toBeTruthy(); 
  });

  it('should get title correctly', () => {
    component.mode = 'login';
    expect(component.title).toBe('Login');
    component.mode = 'register';
    expect(component.title).toBe('Sign up');
  });

  it('should stop submit on invalid form', () => {
    fixture.detectChanges();
    component.form.controls.email.setValue('');
    component.form.controls.email.markAsTouched();
    component.form.controls.password.markAsTouched();
    fixture.detectChanges();
    component.onSubmit();
    expect(component.form.invalid).toBe(true);
  });

  it('should stop submit on register password mismatch', () => {
    component.mode = 'register';
    fixture.detectChanges();
    component.form.controls.email.setValue('test@test.com');
    component.form.controls.password.setValue('123456');
    component.form.controls.confirmPassword.setValue('654321');
    component.onSubmit();
    fixture.detectChanges();
    expect(component.error).toBe('Passwords do not match.');
  });

  it('should submit login form successfully', () => {
    vi.spyOn(component.submitted, 'emit');
    component.mode = 'login';
    fixture.detectChanges();
    component.form.controls.email.setValue('test@test.com');
    component.form.controls.password.setValue('123456');
    component.loading = true;
    fixture.detectChanges();
    component.onSubmit();
    expect(mockAuthService.login).toHaveBeenCalledWith('test@test.com', '123456');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/angular']);
    expect(component.submitted.emit).toHaveBeenCalled();
  });

  it('should handle login error', () => {
    mockAuthService.login.mockReturnValue(throwError(() => new Error('Error msg')));
    component.mode = 'login';
    fixture.detectChanges();
    component.form.controls.email.setValue('test@test.com');
    component.form.controls.password.setValue('123456');
    component.onSubmit();
    expect(component.error).toBe('Error msg');
  });

  it('should submit register form successfully', () => {
    vi.spyOn(component.submitted, 'emit');
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {});
    component.mode = 'register';
    fixture.detectChanges();
    component.form.controls.email.setValue('test@test.com');
    component.form.controls.password.setValue('123456');
    component.form.controls.confirmPassword.setValue('123456');
    component.onSubmit();
    expect(localStorage.setItem).toHaveBeenCalledWith('angularCampus.user', JSON.stringify({ email: 'test@test.com', password: '123456' }));
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/auth/login']);
    expect(component.submitted.emit).toHaveBeenCalled();
  });
});
