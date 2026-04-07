import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MenuService } from '../../core/services/menu.service';
import { SectionsService } from '../../core/services/sections.service';
import { AngularPageComponent } from './angular-page.component';

describe('AngularPageComponent', () => {
  it('sets current page and ensures initial sections on init', async () => {
    const menuService = { setCurrentPage: vi.fn() } as unknown as MenuService;
    const sectionsService = {
      ensureInitialSections: vi.fn(),
      getSectionsForPage: vi.fn().mockReturnValue(of([])),
      addSection: vi.fn(),
    } as unknown as SectionsService;

    await TestBed.configureTestingModule({
      imports: [AngularPageComponent],
      providers: [
        { provide: MenuService, useValue: menuService },
        { provide: SectionsService, useValue: sectionsService },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(AngularPageComponent);
    fixture.detectChanges(); // triggers ngOnInit

    expect((menuService as any).setCurrentPage).toHaveBeenCalledWith('angular');
    expect((sectionsService as any).ensureInitialSections).toHaveBeenCalledWith('angular', expect.any(Array));
    expect((sectionsService as any).getSectionsForPage).toHaveBeenCalledWith('angular');
  });

  it('adds section and hides form on section created', async () => {
    const menuService = { setCurrentPage: vi.fn() } as unknown as MenuService;
    const sectionsService = {
      ensureInitialSections: vi.fn(),
      getSectionsForPage: vi.fn().mockReturnValue(of([])),
      addSection: vi.fn(),
    } as unknown as SectionsService;

    await TestBed.configureTestingModule({
      imports: [AngularPageComponent],
      providers: [
        { provide: MenuService, useValue: menuService },
        { provide: SectionsService, useValue: sectionsService },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(AngularPageComponent);
    fixture.detectChanges();

    fixture.componentInstance.showForm = true;
    fixture.componentInstance.onSectionCreated({ title: 'T', content: 'C' });

    expect((sectionsService as any).addSection).toHaveBeenCalledWith('angular', 'T', 'C');
    expect(fixture.componentInstance.showForm).toBe(false);
  });
});

