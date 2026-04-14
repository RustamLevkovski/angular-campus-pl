// Lesson 4 Disable Services and Routes. import { TestBed } from '@angular/core/testing';
// Lesson 4 Disable Services and Routes. import { ActivatedRoute, Router } from '@angular/router';
// Lesson 4 Disable Services and Routes. import { of, throwError } from 'rxjs';
// Lesson 4 Disable Services and Routes. import { AuthService } from '../../../core/services/auth.service';
// Lesson 4 Disable Services and Routes. import { AuthFormComponent } from './auth-form.component';

describe('AuthFormComponent', () => {
  it.skip('Lesson 4 Disable Services and Routes. AuthForm routing/service tests are commented out', () => {
    // Lesson 4 Disable Services and Routes. intentionally skipped
  });
});

// Lesson 4 Disable Services and Routes. describe('AuthFormComponent', () => {
// Lesson 4 Disable Services and Routes.   function setup(
// Lesson 4 Disable Services and Routes.     authLoginImpl: (email: string, pass: string) => unknown,
// Lesson 4 Disable Services and Routes.     init?: (component: AuthFormComponent) => void
// Lesson 4 Disable Services and Routes.   ) {
// Lesson 4 Disable Services and Routes.     const router = { navigate: vi.fn() } as unknown as Router;
// Lesson 4 Disable Services and Routes.     const authService = { login: vi.fn(authLoginImpl) } as unknown as AuthService;
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     TestBed.configureTestingModule({
// Lesson 4 Disable Services and Routes.       imports: [AuthFormComponent],
// Lesson 4 Disable Services and Routes.       providers: [
// Lesson 4 Disable Services and Routes.         { provide: Router, useValue: router },
// Lesson 4 Disable Services and Routes.         { provide: ActivatedRoute, useValue: {} },
// Lesson 4 Disable Services and Routes.         { provide: AuthService, useValue: authService },
// Lesson 4 Disable Services and Routes.       ],
// Lesson 4 Disable Services and Routes.     });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const fixture = TestBed.createComponent(AuthFormComponent);
// Lesson 4 Disable Services and Routes.     if (init) init(fixture.componentInstance);
// Lesson 4 Disable Services and Routes.     fixture.detectChanges();
// Lesson 4 Disable Services and Routes.     return { fixture, component: fixture.componentInstance, router, authService };
// Lesson 4 Disable Services and Routes.   }
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('does not render confirm password field in login mode', () => {
// Lesson 4 Disable Services and Routes.     const { fixture } = setup(() => of('token'), (c) => (c.mode = 'login'));
// Lesson 4 Disable Services and Routes.     expect(fixture.nativeElement.textContent).not.toContain('Confirm password');
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('renders confirm password field in register mode', () => {
// Lesson 4 Disable Services and Routes.     const { fixture } = setup(() => of('token'), (c) => (c.mode = 'register'));
// Lesson 4 Disable Services and Routes.     expect(fixture.nativeElement.textContent).toContain('Confirm password');
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('renders spinner template when loading is true', () => {
// Lesson 4 Disable Services and Routes.     const { fixture } = setup(() => of('token'), (c) => (c.loading = true));
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(fixture.nativeElement.querySelector('mat-progress-spinner')).toBeTruthy();
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('does nothing when form is invalid', () => {
// Lesson 4 Disable Services and Routes.     const { component, router, authService } = setup(() => of('token'));
// Lesson 4 Disable Services and Routes.     component.onSubmit();
// Lesson 4 Disable Services and Routes.     expect(authService.login).not.toHaveBeenCalled();
// Lesson 4 Disable Services and Routes.     expect((router as any).navigate).not.toHaveBeenCalled();
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('shows error when registering with mismatched passwords', () => {
// Lesson 4 Disable Services and Routes.     const { component, router, authService } = setup(() => of('token'));
// Lesson 4 Disable Services and Routes.     component.mode = 'register';
// Lesson 4 Disable Services and Routes.     component.form.setValue({ email: 'a@b.com', password: '123456', confirmPassword: '654321' });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     component.onSubmit();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(component.error).toBe('Passwords do not match.');
// Lesson 4 Disable Services and Routes.     expect(component.loading).toBe(false);
// Lesson 4 Disable Services and Routes.     expect(authService.login).not.toHaveBeenCalled();
// Lesson 4 Disable Services and Routes.     expect((router as any).navigate).not.toHaveBeenCalled();
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('emits and navigates on successful login', () => {
// Lesson 4 Disable Services and Routes.     const { component, router, authService } = setup(() => of('token'));
// Lesson 4 Disable Services and Routes.     const emitted: any[] = [];
// Lesson 4 Disable Services and Routes.     component.submitted.subscribe((v) => emitted.push(v));
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     component.mode = 'login';
// Lesson 4 Disable Services and Routes.     component.form.setValue({ email: 'admin@devhub.com', password: 'password', confirmPassword: '' });
// Lesson 4 Disable Services and Routes.     component.onSubmit();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(authService.login).toHaveBeenCalledWith('admin@devhub.com', 'password');
// Lesson 4 Disable Services and Routes.     expect(component.loading).toBe(false);
// Lesson 4 Disable Services and Routes.     expect(component.error).toBeNull();
// Lesson 4 Disable Services and Routes.     expect(emitted).toEqual([{ email: 'admin@devhub.com', password: 'password', mode: 'login' }]);
// Lesson 4 Disable Services and Routes.     expect((router as any).navigate).toHaveBeenCalledWith(['/angular']);
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('shows error on failed login', () => {
// Lesson 4 Disable Services and Routes.     const { component, router } = setup(() => throwError(() => new Error('nope')));
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     component.mode = 'login';
// Lesson 4 Disable Services and Routes.     component.form.setValue({ email: 'x@y.com', password: '123456', confirmPassword: '' });
// Lesson 4 Disable Services and Routes.     component.onSubmit();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(component.loading).toBe(false);
// Lesson 4 Disable Services and Routes.     expect(component.error).toBe('nope');
// Lesson 4 Disable Services and Routes.     expect((router as any).navigate).not.toHaveBeenCalled();
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('emits, saves to localStorage, and navigates on register', () => {
// Lesson 4 Disable Services and Routes.     const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
// Lesson 4 Disable Services and Routes.     const { component, router } = setup(() => of('token'));
// Lesson 4 Disable Services and Routes.     const emitted: any[] = [];
// Lesson 4 Disable Services and Routes.     component.submitted.subscribe((v) => emitted.push(v));
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     component.mode = 'register';
// Lesson 4 Disable Services and Routes.     component.form.setValue({ email: 'a@b.com', password: '123456', confirmPassword: '123456' });
// Lesson 4 Disable Services and Routes.     component.onSubmit();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(setItemSpy).toHaveBeenCalledWith('angularCampus.user', JSON.stringify({ email: 'a@b.com', password: '123456' }));
// Lesson 4 Disable Services and Routes.     expect(component.loading).toBe(false);
// Lesson 4 Disable Services and Routes.     expect(component.error).toBeNull();
// Lesson 4 Disable Services and Routes.     expect(emitted).toEqual([{ email: 'a@b.com', password: '123456', mode: 'register' }]);
// Lesson 4 Disable Services and Routes.     expect((router as any).navigate).toHaveBeenCalledWith(['/auth/login']);
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes. });

