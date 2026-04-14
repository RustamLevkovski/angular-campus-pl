// Lesson 4 Disable Services and Routes. import { TestBed } from '@angular/core/testing';
// Lesson 4 Disable Services and Routes. import { firstValueFrom, of } from 'rxjs';
// Lesson 4 Disable Services and Routes. import { MenuService } from './menu.service';
// Lesson 4 Disable Services and Routes. import { SectionsService } from './sections.service';

describe('MenuService', () => {
  it.skip('Lesson 4 Disable Services and Routes. MenuService tests are commented out (service disabled)', () => {
    // Lesson 4 Disable Services and Routes. intentionally skipped
  });
});

// Lesson 4 Disable Services and Routes. describe('MenuService', () => {
// Lesson 4 Disable Services and Routes.   it('maps sections to nav items for current page', async () => {
// Lesson 4 Disable Services and Routes.     const sectionsService = {
// Lesson 4 Disable Services and Routes.       getSectionsForPage: vi.fn().mockReturnValue(
// Lesson 4 Disable Services and Routes.         of([
// Lesson 4 Disable Services and Routes.           { id: 1, pageName: 'angular', title: 'T1', content: 'C1' },
// Lesson 4 Disable Services and Routes.           { id: 2, pageName: 'angular', title: 'T2', content: 'C2' },
// Lesson 4 Disable Services and Routes.         ])
// Lesson 4 Disable Services and Routes.       ),
// Lesson 4 Disable Services and Routes.     } satisfies Partial<SectionsService> as unknown as SectionsService;
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     TestBed.configureTestingModule({
// Lesson 4 Disable Services and Routes.       providers: [{ provide: SectionsService, useValue: sectionsService }, MenuService],
// Lesson 4 Disable Services and Routes.     });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const service = TestBed.inject(MenuService);
// Lesson 4 Disable Services and Routes.     service.setCurrentPage('angular');
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const items = await firstValueFrom(service.sections$);
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(sectionsService.getSectionsForPage).toHaveBeenCalledWith('angular');
// Lesson 4 Disable Services and Routes.     expect(items).toEqual([
// Lesson 4 Disable Services and Routes.       { label: 'T1', anchor: '#section-1' },
// Lesson 4 Disable Services and Routes.       { label: 'T2', anchor: '#section-2' },
// Lesson 4 Disable Services and Routes.     ]);
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('emits empty list when page is not set', async () => {
// Lesson 4 Disable Services and Routes.     const sectionsService = { getSectionsForPage: vi.fn() } as unknown as SectionsService;
// Lesson 4 Disable Services and Routes.     TestBed.configureTestingModule({
// Lesson 4 Disable Services and Routes.       providers: [{ provide: SectionsService, useValue: sectionsService }, MenuService],
// Lesson 4 Disable Services and Routes.     });
// Lesson 4 Disable Services and Routes.     const service = TestBed.inject(MenuService);
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const items = await firstValueFrom(service.sections$);
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(items).toEqual([]);
// Lesson 4 Disable Services and Routes.     expect(sectionsService.getSectionsForPage).not.toHaveBeenCalled();
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes. });

