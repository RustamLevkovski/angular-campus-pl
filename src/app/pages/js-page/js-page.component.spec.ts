import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MenuService } from '../../core/services/menu.service';
import { SectionsService } from '../../core/services/sections.service';
import { JsPageComponent } from './js-page.component';

describe('JsPageComponent', () => {
  it('sets current page and ensures initial sections on init', async () => {
    const menuService = { setCurrentPage: vi.fn() } as unknown as MenuService;
    const sectionsService = {
      ensureInitialSections: vi.fn(),
      getSectionsForPage: vi.fn().mockReturnValue(of([])),
      addSection: vi.fn(),
    } as unknown as SectionsService;

    await TestBed.configureTestingModule({
      imports: [JsPageComponent],
      providers: [
        { provide: MenuService, useValue: menuService },
        { provide: SectionsService, useValue: sectionsService },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(JsPageComponent);
    fixture.detectChanges();

    expect((menuService as any).setCurrentPage).toHaveBeenCalledWith('javascript');
    expect((sectionsService as any).ensureInitialSections).toHaveBeenCalledWith('javascript', expect.any(Array));
    expect((sectionsService as any).getSectionsForPage).toHaveBeenCalledWith('javascript');
  });

  it('adds section and hides form on section created', async () => {
    const menuService = { setCurrentPage: vi.fn() } as unknown as MenuService;
    const sectionsService = {
      ensureInitialSections: vi.fn(),
      getSectionsForPage: vi.fn().mockReturnValue(of([])),
      addSection: vi.fn(),
    } as unknown as SectionsService;

    await TestBed.configureTestingModule({
      imports: [JsPageComponent],
      providers: [
        { provide: MenuService, useValue: menuService },
        { provide: SectionsService, useValue: sectionsService },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(JsPageComponent);
    fixture.detectChanges();

    fixture.componentInstance.showForm = true;
    fixture.componentInstance.onSectionCreated({ title: 'T', content: 'C' });

    expect((sectionsService as any).addSection).toHaveBeenCalledWith('javascript', 'T', 'C');
    expect(fixture.componentInstance.showForm).toBe(false);
  });
});

