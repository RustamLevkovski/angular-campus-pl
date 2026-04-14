import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, pass: string): Observable<string> {
    // Lesson 4 Disable Services and Routes. const userStr = localStorage.getItem('angularCampus.user');

    // Lesson 4 Disable Services and Routes. if (email === 'admin@devhub.com' && pass === 'password') {
    // Lesson 4 Disable Services and Routes.   return of('fake-jwt-token-admin').pipe(delay(100));
    // Lesson 4 Disable Services and Routes. }

    // Lesson 4 Disable Services and Routes. if (!userStr) {
    // Lesson 4 Disable Services and Routes.   return throwError(() => new Error('User not found. Please register.')).pipe(delay(100));
    // Lesson 4 Disable Services and Routes. }

    // Lesson 4 Disable Services and Routes. try {
    // Lesson 4 Disable Services and Routes.   const user = JSON.parse(userStr);
    // Lesson 4 Disable Services and Routes.   if (user.email === email && user.password === pass) {
    // Lesson 4 Disable Services and Routes.     return of('fake-jwt-token-user').pipe(delay(100));
    // Lesson 4 Disable Services and Routes.   } else {
    // Lesson 4 Disable Services and Routes.     return throwError(() => new Error('Invalid email or password')).pipe(delay(100));
    // Lesson 4 Disable Services and Routes.   }
    // Lesson 4 Disable Services and Routes. } catch (e) {
    // Lesson 4 Disable Services and Routes.   return throwError(() => new Error('Failed to parse user data')).pipe(delay(100));
    // Lesson 4 Disable Services and Routes. }

    return throwError(() => new Error('Lesson 4 Disable Services and Routes. AuthService disabled')).pipe(
      delay(0)
    );
  }
}