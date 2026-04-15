import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  let mockStore: any;
  let mockRouter: any;

  beforeEach(() => {
    mockStore = {
      select: vi.fn(),
    };
    mockRouter = {
      createUrlTree: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: Router, useValue: mockRouter },
      ]
    });
  });

  const executeGuard = () => TestBed.runInInjectionContext(() => authGuard({} as any, {} as any));

  it('should return true if user is authenticated', () => {
    mockStore.select.mockReturnValue(of(true));

    const result = executeGuard();
    
    if (result instanceof Observable) {
      result.subscribe(val => {
        expect(val).toBe(true);
      });
    } else {
      expect(result).toBe(true);
    }
  });

  it('should return a UrlTree to /auth/login if not authenticated', () => {
    mockStore.select.mockReturnValue(of(false));
    const urlTree = {} as any;
    mockRouter.createUrlTree.mockReturnValue(urlTree);

    const result = executeGuard();
    
    if (result instanceof Observable) {
      result.subscribe(val => {
        expect(val).toBe(urlTree);
        expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/auth/login']);
      });
    } else {
      expect(result).toBe(urlTree);
      expect(mockRouter.createUrlTree).toHaveBeenCalledWith(['/auth/login']);
    }
  });
});
