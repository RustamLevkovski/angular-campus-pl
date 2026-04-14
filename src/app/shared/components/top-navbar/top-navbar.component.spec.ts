// Lesson 4 Disable Services and Routes. import { TestBed } from '@angular/core/testing';
// Lesson 4 Disable Services and Routes. import { ActivatedRoute, Router } from '@angular/router';
// Lesson 4 Disable Services and Routes. import { of } from 'rxjs';
// Lesson 4 Disable Services and Routes. import { TopNavbarComponent } from './top-navbar.component';

describe('TopNavbarComponent', () => {
  it.skip('Lesson 4 Disable Services and Routes. TopNavbar router directive test commented out', async () => {
    // Lesson 4 Disable Services and Routes. intentionally skipped
  });
});

// Lesson 4 Disable Services and Routes. describe('TopNavbarComponent', () => {
// Lesson 4 Disable Services and Routes.   it('creates', async () => {
// Lesson 4 Disable Services and Routes.     await TestBed.configureTestingModule({
// Lesson 4 Disable Services and Routes.       imports: [TopNavbarComponent],
// Lesson 4 Disable Services and Routes.       providers: [
// Lesson 4 Disable Services and Routes.         {
// Lesson 4 Disable Services and Routes.           provide: Router,
// Lesson 4 Disable Services and Routes.           useValue: {
// Lesson 4 Disable Services and Routes.             events: of(),
// Lesson 4 Disable Services and Routes.             createUrlTree: vi.fn(),
// Lesson 4 Disable Services and Routes.             serializeUrl: vi.fn(),
// Lesson 4 Disable Services and Routes.             navigateByUrl: vi.fn(),
// Lesson 4 Disable Services and Routes.             isActive: vi.fn(),
// Lesson 4 Disable Services and Routes.           },
// Lesson 4 Disable Services and Routes.         },
// Lesson 4 Disable Services and Routes.         { provide: ActivatedRoute, useValue: {} },
// Lesson 4 Disable Services and Routes.       ],
// Lesson 4 Disable Services and Routes.     }).compileComponents();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const fixture = TestBed.createComponent(TopNavbarComponent);
// Lesson 4 Disable Services and Routes.     expect(fixture.componentInstance).toBeTruthy();
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes. });

