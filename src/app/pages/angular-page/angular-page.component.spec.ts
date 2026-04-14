// Lesson 4 Disable Services and Routes. import { TestBed } from '@angular/core/testing';
// Lesson 4 Disable Services and Routes. import { of } from 'rxjs';
// Lesson 4 Disable Services and Routes. import { MenuService } from '../../core/services/menu.service';
// Lesson 4 Disable Services and Routes. import { SectionsService } from '../../core/services/sections.service';
// Lesson 4 Disable Services and Routes. import { AngularPageComponent } from './angular-page.component';

describe('AngularPageComponent', () => {
  it.skip('Lesson 4 Disable Services and Routes. Page/service tests are commented out (services disabled)', () => {
    // Lesson 4 Disable Services and Routes. intentionally skipped
  });
});

// Lesson 4 Disable Services and Routes. describe('AngularPageComponent', () => {
// Lesson 4 Disable Services and Routes.   it('sets current page and ensures initial sections on init', async () => {
// Lesson 4 Disable Services and Routes.     const menuService = { setCurrentPage: vi.fn() } as unknown as MenuService;
// Lesson 4 Disable Services and Routes.     const sectionsService = {
// Lesson 4 Disable Services and Routes.       ensureInitialSections: vi.fn(),
// Lesson 4 Disable Services and Routes.       getSectionsForPage: vi.fn().mockReturnValue(of([])),
// Lesson 4 Disable Services and Routes.       addSection: vi.fn(),
// Lesson 4 Disable Services and Routes.     } as unknown as SectionsService;
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     await TestBed.configureTestingModule({
// Lesson 4 Disable Services and Routes.       imports: [AngularPageComponent],
// Lesson 4 Disable Services and Routes.       providers: [
// Lesson 4 Disable Services and Routes.         { provide: MenuService, useValue: menuService },
// Lesson 4 Disable Services and Routes.         { provide: SectionsService, useValue: sectionsService },
// Lesson 4 Disable Services and Routes.       ],
// Lesson 4 Disable Services and Routes.     }).compileComponents();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const fixture = TestBed.createComponent(AngularPageComponent);
// Lesson 4 Disable Services and Routes.     fixture.detectChanges(); (triggers ngOnInit)
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect((menuService as any).setCurrentPage).toHaveBeenCalledWith('angular');
// Lesson 4 Disable Services and Routes.     expect((sectionsService as any).ensureInitialSections).toHaveBeenCalledWith('angular', expect.any(Array));
// Lesson 4 Disable Services and Routes.     expect((sectionsService as any).getSectionsForPage).toHaveBeenCalledWith('angular');
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.   it('adds section and hides form on section created', async () => {
// Lesson 4 Disable Services and Routes.     const menuService = { setCurrentPage: vi.fn() } as unknown as MenuService;
// Lesson 4 Disable Services and Routes.     const sectionsService = {
// Lesson 4 Disable Services and Routes.       ensureInitialSections: vi.fn(),
// Lesson 4 Disable Services and Routes.       getSectionsForPage: vi.fn().mockReturnValue(of([])),
// Lesson 4 Disable Services and Routes.       addSection: vi.fn(),
// Lesson 4 Disable Services and Routes.     } as unknown as SectionsService;
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     await TestBed.configureTestingModule({
// Lesson 4 Disable Services and Routes.       imports: [AngularPageComponent],
// Lesson 4 Disable Services and Routes.       providers: [
// Lesson 4 Disable Services and Routes.         { provide: MenuService, useValue: menuService },
// Lesson 4 Disable Services and Routes.         { provide: SectionsService, useValue: sectionsService },
// Lesson 4 Disable Services and Routes.       ],
// Lesson 4 Disable Services and Routes.     }).compileComponents();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const fixture = TestBed.createComponent(AngularPageComponent);
// Lesson 4 Disable Services and Routes.     fixture.detectChanges();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     fixture.componentInstance.showForm = true;
// Lesson 4 Disable Services and Routes.     fixture.componentInstance.onSectionCreated({ title: 'T', content: 'C' });
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect((sectionsService as any).addSection).toHaveBeenCalledWith('angular', 'T', 'C');
// Lesson 4 Disable Services and Routes.     expect(fixture.componentInstance.showForm).toBe(false);
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes. });

