import { TestBed } from '@angular/core/testing';
// Lesson 5. (NgRx disabled) import { Store } from '@ngrx/store';
// Lesson 5. (NgRx disabled) import { firstValueFrom, of } from 'rxjs';
// Lesson 5. (NgRx disabled) import { StoreService } from './store.service';

describe('StoreService', () => {
  it.skip('Lesson 5. (NgRx disabled) store-select proxy tests are commented out', () => {
    // Lesson 5. (NgRx disabled) intentionally skipped
  });
});

// Lesson 5. (NgRx disabled) describe('StoreService', () => {
// Lesson 5. (NgRx disabled)   it('selectAuthLoading proxies to store.select', async () => {
// Lesson 5. (NgRx disabled)     const store = { select: vi.fn().mockReturnValue(of(true)) };
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [StoreService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(StoreService);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const value = await firstValueFrom(service.selectAuthLoading());
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     expect(value).toBe(true);
// Lesson 5. (NgRx disabled)     expect(store.select).toHaveBeenCalledTimes(1);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('selectAuthError proxies to store.select', async () => {
// Lesson 5. (NgRx disabled)     const store = { select: vi.fn().mockReturnValue(of('boom')) };
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [StoreService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(StoreService);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const value = await firstValueFrom(service.selectAuthError());
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     expect(value).toBe('boom');
// Lesson 5. (NgRx disabled)     expect(store.select).toHaveBeenCalledTimes(1);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled) });
