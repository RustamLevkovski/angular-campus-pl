import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('emits a token for admin credentials', async () => {
    vi.useFakeTimers();
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    const service = TestBed.runInInjectionContext(() => new AuthService());

    let value: string | undefined;
    service.login('admin@devhub.com', 'password').subscribe((v) => (value = v));

    expect(value).toBeUndefined();
    await vi.advanceTimersByTimeAsync(100);
    expect(value).toBe('fake-jwt-token-admin');
  });

  it('errors if user not found in local storage', async () => {
    vi.useFakeTimers();
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
    const service = TestBed.runInInjectionContext(() => new AuthService());

    let err: unknown;
    service.login('test@test.com', 'pass').subscribe({
      error: (e) => (err = e),
    });
    
    await vi.advanceTimersByTimeAsync(100);
    expect(err).toBeInstanceOf(Error);
    expect((err as Error).message).toBe('User not found. Please register.');
  });

  it('emits a token for valid localStorage credentials', async () => {
    vi.useFakeTimers();
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify({ email: 'u@dev.com', password: '123' }));
    const service = TestBed.runInInjectionContext(() => new AuthService());

    let value: string | undefined;
    service.login('u@dev.com', '123').subscribe((v) => (value = v));

    expect(value).toBeUndefined();
    await vi.advanceTimersByTimeAsync(100);
    expect(value).toBe('fake-jwt-token-user');
  });

  it('errors for invalid localStorage credentials', async () => {
    vi.useFakeTimers();
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify({ email: 'u@dev.com', password: '123' }));
    const service = TestBed.runInInjectionContext(() => new AuthService());

    let err: unknown;
    service.login('u@dev.com', 'nope').subscribe({
      error: (e) => (err = e),
    });

    await vi.advanceTimersByTimeAsync(100);
    expect(err).toBeInstanceOf(Error);
    expect((err as Error).message).toBe('Invalid email or password');
  });
});

