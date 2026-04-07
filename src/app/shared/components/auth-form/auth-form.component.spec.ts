import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { AuthFormComponent } from './auth-form.component';

describe('AuthFormComponent', () => {
  function setup(
    authLoginImpl: (email: string, pass: string) => unknown,
    init?: (component: AuthFormComponent) => void
  ) {
    const router = { navigate: vi.fn() } as unknown as Router;
    const authService = { login: vi.fn(authLoginImpl) } as unknown as AuthService;

    TestBed.configureTestingModule({
      imports: [AuthFormComponent],
      providers: [
        { provide: Router, useValue: router },
        { provide: ActivatedRoute, useValue: {} },
        { provide: AuthService, useValue: authService },
      ],
    });

    const fixture = TestBed.createComponent(AuthFormComponent);
    if (init) init(fixture.componentInstance);
    fixture.detectChanges();
    return { fixture, component: fixture.componentInstance, router, authService };
  }

  it('does not render confirm password field in login mode', () => {
    const { fixture } = setup(() => of('token'), (c) => (c.mode = 'login'));
    expect(fixture.nativeElement.textContent).not.toContain('Confirm password');
  });

  it('renders confirm password field in register mode', () => {
    const { fixture } = setup(() => of('token'), (c) => (c.mode = 'register'));
    expect(fixture.nativeElement.textContent).toContain('Confirm password');
  });

  it('renders spinner template when loading is true', () => {
    const { fixture } = setup(() => of('token'), (c) => (c.loading = true));

    expect(fixture.nativeElement.querySelector('mat-progress-spinner')).toBeTruthy();
  });

  it('does nothing when form is invalid', () => {
    const { component, router, authService } = setup(() => of('token'));
    component.onSubmit();
    expect(authService.login).not.toHaveBeenCalled();
    expect((router as any).navigate).not.toHaveBeenCalled();
  });

  it('shows error when registering with mismatched passwords', () => {
    const { component, router, authService } = setup(() => of('token'));
    component.mode = 'register';
    component.form.setValue({ email: 'a@b.com', password: '123456', confirmPassword: '654321' });

    component.onSubmit();

    expect(component.error).toBe('Passwords do not match.');
    expect(component.loading).toBe(false);
    expect(authService.login).not.toHaveBeenCalled();
    expect((router as any).navigate).not.toHaveBeenCalled();
  });

  it('emits and navigates on successful login', () => {
    const { component, router, authService } = setup(() => of('token'));
    const emitted: any[] = [];
    component.submitted.subscribe((v) => emitted.push(v));

    component.mode = 'login';
    component.form.setValue({ email: 'admin@devhub.com', password: 'password', confirmPassword: '' });
    component.onSubmit();

    expect(authService.login).toHaveBeenCalledWith('admin@devhub.com', 'password');
    expect(component.loading).toBe(false);
    expect(component.error).toBeNull();
    expect(emitted).toEqual([{ email: 'admin@devhub.com', password: 'password', mode: 'login' }]);
    expect((router as any).navigate).toHaveBeenCalledWith(['/angular']);
  });

  it('shows error on failed login', () => {
    const { component, router } = setup(() => throwError(() => new Error('nope')));

    component.mode = 'login';
    component.form.setValue({ email: 'x@y.com', password: '123456', confirmPassword: '' });
    component.onSubmit();

    expect(component.loading).toBe(false);
    expect(component.error).toBe('nope');
    expect((router as any).navigate).not.toHaveBeenCalled();
  });

  it('emits, saves to localStorage, and navigates on register', () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    const { component, router } = setup(() => of('token'));
    const emitted: any[] = [];
    component.submitted.subscribe((v) => emitted.push(v));

    component.mode = 'register';
    component.form.setValue({ email: 'a@b.com', password: '123456', confirmPassword: '123456' });
    component.onSubmit();

    expect(setItemSpy).toHaveBeenCalledWith('angularCampus.user', JSON.stringify({ email: 'a@b.com', password: '123456' }));
    expect(component.loading).toBe(false);
    expect(component.error).toBeNull();
    expect(emitted).toEqual([{ email: 'a@b.com', password: '123456', mode: 'register' }]);
    expect((router as any).navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});

