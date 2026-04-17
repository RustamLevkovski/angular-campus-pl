import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { MenuService } from './menu.service';
import { SectionsService } from './sections.service';

describe('MenuService', () => {
    it('maps sections to nav items for current page', async () => {
        const sectionsService = {
            getSectionsForPage: vi.fn().mockReturnValue(
                of([
                    { id: 1, pageName: 'angular', title: 'T1', content: 'C1' },
                    { id: 2, pageName: 'angular', title: 'T2', content: 'C2' },
                ])
            ),
        } satisfies Partial<SectionsService> as unknown as SectionsService;

        TestBed.configureTestingModule({
            providers: [{ provide: SectionsService, useValue: sectionsService }, MenuService],
        });

        const service = TestBed.inject(MenuService);
        service.setCurrentPage('angular');

        const items = await firstValueFrom(service.sections$);

        expect(sectionsService.getSectionsForPage).toHaveBeenCalledWith('angular');
        expect(items).toEqual([
            { label: 'T1', anchor: '#section-1' },
            { label: 'T2', anchor: '#section-2' },
        ]);
    });

    it('emits empty list when page is not set', async () => {
        const sectionsService = { getSectionsForPage: vi.fn() } as unknown as SectionsService;
        TestBed.configureTestingModule({
            providers: [{ provide: SectionsService, useValue: sectionsService }, MenuService],
        });
        const service = TestBed.inject(MenuService);

        const items = await firstValueFrom(service.sections$);

        expect(items).toEqual([]);
        expect(sectionsService.getSectionsForPage).not.toHaveBeenCalled();
    });
});
