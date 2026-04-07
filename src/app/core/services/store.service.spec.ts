import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { firstValueFrom, of } from 'rxjs';
import { StoreService } from './store.service';

describe('StoreService', () => {
  it('selectAuthLoading proxies to store.select', async () => {
    const store = { select: vi.fn().mockReturnValue(of(true)) };
    TestBed.configureTestingModule({
      providers: [StoreService, { provide: Store, useValue: store }],
    });

    const service = TestBed.inject(StoreService);

    const value = await firstValueFrom(service.selectAuthLoading());

    expect(value).toBe(true);
    expect(store.select).toHaveBeenCalledTimes(1);
  });

  it('selectAuthError proxies to store.select', async () => {
    const store = { select: vi.fn().mockReturnValue(of('boom')) };
    TestBed.configureTestingModule({
      providers: [StoreService, { provide: Store, useValue: store }],
    });

    const service = TestBed.inject(StoreService);

    const value = await firstValueFrom(service.selectAuthError());

    expect(value).toBe('boom');
    expect(store.select).toHaveBeenCalledTimes(1);
  });
});

