import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, pass: string): Observable<string> {
    const userStr = localStorage.getItem('angularCampus.user');
    
    if (email === 'admin@devhub.com' && pass === 'password') {
      return of('fake-jwt-token-admin').pipe(delay(100));
    }

    if (!userStr) {
      return throwError(() => new Error('User not found. Please register.')).pipe(delay(100));
    }

    try {
      const user = JSON.parse(userStr);
      if (user.email === email && user.password === pass) {
        return of('fake-jwt-token-user').pipe(delay(100));
      } else {
        return throwError(() => new Error('Invalid email or password')).pipe(delay(100));
      }
    } catch (e) {
      return throwError(() => new Error('Failed to parse user data')).pipe(delay(100));
    }
  }
}