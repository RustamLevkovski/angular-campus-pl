import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { addSection, updateSection, removeSection } from '../store/sections/sections.actions';
import { SectionsService } from './sections.service';

describe('SectionsService', () => {
  it('addSection dispatches addSection action', () => {
    const store = {
      dispatch: vi.fn(),
      select: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [SectionsService, { provide: Store, useValue: store }],
    });

    const service = TestBed.inject(SectionsService);
    vi.spyOn(Date, 'now').mockReturnValue(123);

    service.addSection('angular', 'Title', 'Content');

    expect(store.dispatch).toHaveBeenCalledWith(
      addSection({ section: { id: 123, pageName: 'angular', title: 'Title', content: 'Content' } })
    );
  });

  it('updateSection dispatches updateSection action', () => {
    const store = { dispatch: vi.fn(), select: vi.fn() };
    TestBed.configureTestingModule({
      providers: [SectionsService, { provide: Store, useValue: store }],
    });
    const service = TestBed.inject(SectionsService);
    const section = { id: 1, pageName: 'angular', title: 'Title', content: 'Content' };
    service.updateSection(section);
    expect(store.dispatch).toHaveBeenCalledWith(updateSection({ section }));
  });

  it('removeSection dispatches removeSection action', () => {
    const store = { dispatch: vi.fn(), select: vi.fn() };
    TestBed.configureTestingModule({
      providers: [SectionsService, { provide: Store, useValue: store }],
    });
    const service = TestBed.inject(SectionsService);
    service.removeSection(1);
    expect(store.dispatch).toHaveBeenCalledWith(removeSection({ id: 1 }));
  });

  it('getSectionsForPage selects with selector', () => {
    const store = {
      dispatch: vi.fn(),
      select: vi.fn().mockReturnValue(of([{ id: 1, pageName: 'p', title: 't', content: 'c' }])),
    };

    TestBed.configureTestingModule({
      providers: [SectionsService, { provide: Store, useValue: store }],
    });

    const service = TestBed.inject(SectionsService);
    service.getSectionsForPage('p').subscribe();

    expect(store.select).toHaveBeenCalledTimes(1);
    expect(store.select.mock.calls[0]?.[0]).toBeTypeOf('function');
  });

  it('ensureInitialSections seeds only when empty', () => {
    const store = {
      dispatch: vi.fn(),
      select: vi.fn().mockReturnValue(of([])),
    };

    TestBed.configureTestingModule({
      providers: [SectionsService, { provide: Store, useValue: store }],
    });

    const service = TestBed.inject(SectionsService);
    vi.spyOn(Date, 'now').mockReturnValue(1);

    service.ensureInitialSections('angular', [
      { title: 'A', content: 'a' },
      { title: 'B', content: 'b' },
    ]);

    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it('ensureInitialSections does not seed when already present', () => {
    const store = {
      dispatch: vi.fn(),
      select: vi.fn().mockReturnValue(of([{ id: 1, pageName: 'angular', title: 'T', content: 'C' }])),
    };

    TestBed.configureTestingModule({
      providers: [SectionsService, { provide: Store, useValue: store }],
    });

    const service = TestBed.inject(SectionsService);
    service.ensureInitialSections('angular', [{ title: 'A', content: 'a' }]);

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});

