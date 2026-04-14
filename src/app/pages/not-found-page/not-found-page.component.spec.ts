// Lesson 4 Disable Services and Routes. import { TestBed } from '@angular/core/testing';
// Lesson 4 Disable Services and Routes. import { ActivatedRoute, Router } from '@angular/router';
// Lesson 4 Disable Services and Routes. import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  it.skip('Lesson 4 Disable Services and Routes. NotFoundPage routing test commented out', async () => {
    // Lesson 4 Disable Services and Routes. intentionally skipped
  });
});

// Lesson 4 Disable Services and Routes. describe('NotFoundPageComponent', () => {
// Lesson 4 Disable Services and Routes.   it('creates', async () => {
// Lesson 4 Disable Services and Routes.     await TestBed.configureTestingModule({
// Lesson 4 Disable Services and Routes.       imports: [NotFoundPageComponent],
// Lesson 4 Disable Services and Routes.       providers: [
// Lesson 4 Disable Services and Routes.         { provide: Router, useValue: { createUrlTree: vi.fn(), serializeUrl: vi.fn(), navigateByUrl: vi.fn() } },
// Lesson 4 Disable Services and Routes.         { provide: ActivatedRoute, useValue: {} },
// Lesson 4 Disable Services and Routes.       ],
// Lesson 4 Disable Services and Routes.     }).compileComponents();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const fixture = TestBed.createComponent(NotFoundPageComponent);
// Lesson 4 Disable Services and Routes.     expect(fixture.componentInstance).toBeTruthy();
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes. });

