import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // - add parameters to this method:
  //   - email: string
  //   - pass: string
  //
  // Steps to implement:
  // - Read the saved user JSON string from `localStorage` using the key `angularCampus.user`.
  // - First, handle the hardcoded admin shortcut:
  //   if credentials match `admin@devhub.com` / `password`, return an Observable token.
  // - If there is no saved user in storage, return an Observable error telling the user to register.
  // - Parse the stored JSON inside a `try` block.
  // - Compare parsed `user.email` and `user.password` with the method parameters.
  // - If they match, return an Observable success token for a normal user.
  // - If they do not match, return an Observable error for invalid credentials.
  // - In `catch`, return an Observable error when parsing fails.
  // - Add a small `delay(...)` to each returned Observable so the flow simulates a real async request.
  login() {}
}