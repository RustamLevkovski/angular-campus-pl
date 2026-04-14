// Lesson 4 Disable Services and Routes. import { TestBed } from '@angular/core/testing';
// Lesson 4 Disable Services and Routes. import { AuthService } from './auth.service';

describe('AuthService', () => {
  it.skip('Lesson 4 Disable Services and Routes. AuthService tests are commented out (service disabled)', () => {
    // Lesson 4 Disable Services and Routes. intentionally skipped
  });
});

// Lesson 4 Disable Services and Routes. describe('AuthService', () => {
// Lesson 4 Disable Services and Routes.   afterEach(() => {
// Lesson 4 Disable Services and Routes.     vi.restoreAllMocks();
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('emits a token for admin credentials', async () => {
// Lesson 4 Disable Services and Routes.     vi.useFakeTimers();
// Lesson 4 Disable Services and Routes.     vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
// Lesson 4 Disable Services and Routes.     const service = TestBed.runInInjectionContext(() => new AuthService());
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     let value: string | undefined;
// Lesson 4 Disable Services and Routes.     service.login('admin@devhub.com', 'password').subscribe((v) => (value = v));
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(value).toBeUndefined();
// Lesson 4 Disable Services and Routes.     await vi.advanceTimersByTimeAsync(100);
// Lesson 4 Disable Services and Routes.     expect(value).toBe('fake-jwt-token-admin');
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('errors if user not found in local storage', async () => {
// Lesson 4 Disable Services and Routes.     vi.useFakeTimers();
// Lesson 4 Disable Services and Routes.     vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(null);
// Lesson 4 Disable Services and Routes.     const service = TestBed.runInInjectionContext(() => new AuthService());
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     let err: unknown;
// Lesson 4 Disable Services and Routes.     service.login('test@test.com', 'pass').subscribe({
// Lesson 4 Disable Services and Routes.       error: (e) => (err = e),
// Lesson 4 Disable Services and Routes.     });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     await vi.advanceTimersByTimeAsync(100);
// Lesson 4 Disable Services and Routes.     expect(err).toBeInstanceOf(Error);
// Lesson 4 Disable Services and Routes.     expect((err as Error).message).toBe('User not found. Please register.');
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('emits a token for valid localStorage credentials', async () => {
// Lesson 4 Disable Services and Routes.     vi.useFakeTimers();
// Lesson 4 Disable Services and Routes.     vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify({ email: 'u@dev.com', password: '123' }));
// Lesson 4 Disable Services and Routes.     const service = TestBed.runInInjectionContext(() => new AuthService());
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     let value: string | undefined;
// Lesson 4 Disable Services and Routes.     service.login('u@dev.com', '123').subscribe((v) => (value = v));
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(value).toBeUndefined();
// Lesson 4 Disable Services and Routes.     await vi.advanceTimersByTimeAsync(100);
// Lesson 4 Disable Services and Routes.     expect(value).toBe('fake-jwt-token-user');
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('errors for invalid localStorage credentials', async () => {
// Lesson 4 Disable Services and Routes.     vi.useFakeTimers();
// Lesson 4 Disable Services and Routes.     vi.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify({ email: 'u@dev.com', password: '123' }));
// Lesson 4 Disable Services and Routes.     const service = TestBed.runInInjectionContext(() => new AuthService());
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     let err: unknown;
// Lesson 4 Disable Services and Routes.     service.login('u@dev.com', 'nope').subscribe({
// Lesson 4 Disable Services and Routes.       error: (e) => (err = e),
// Lesson 4 Disable Services and Routes.     });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     await vi.advanceTimersByTimeAsync(100);
// Lesson 4 Disable Services and Routes.     expect(err).toBeInstanceOf(Error);
// Lesson 4 Disable Services and Routes.     expect((err as Error).message).toBe('Invalid email or password');
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes. });

