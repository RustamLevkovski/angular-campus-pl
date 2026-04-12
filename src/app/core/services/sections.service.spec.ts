import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { addSection, updateSection, removeSection } from '../store/sections/sections.actions';
import { SectionsService } from './sections.service';

describe('SectionsService', () => {
  it('addSection dispatches addSection action with unique ids', () => {
    const store = {
      dispatch: vi.fn(),
      select: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [SectionsService, { provide: Store, useValue: store }],
    });

    const service = TestBed.inject(SectionsService);
    vi.spyOn(Date, 'now').mockReturnValue(123);
    vi.spyOn(Math, 'random').mockReturnValue(0.456); // result: 456

    service.addSection('angular', 'Title 1', 'Content 1');
    service.addSection('angular', 'Title 2', 'Content 2');

    expect(store.dispatch).toHaveBeenCalledTimes(2);
    
    // ID = "123" + "456" = 123456
    expect(store.dispatch).toHaveBeenNthCalledWith(1, 
      addSection({ section: expect.objectContaining({ id: 123456, title: 'Title 1' }) })
    );

    // Second call with same mock should have ID 123457 (because 123456 <= 123456, so lastId + 1)
    expect(store.dispatch).toHaveBeenNthCalledWith(2, 
      addSection({ section: expect.objectContaining({ id: 123457, title: 'Title 2' }) })
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
  it('ensureInitialSections avoids duplicate calls for the same page session', () => {
    const store = {
      dispatch: vi.fn(),
      select: vi.fn().mockReturnValue(of([])),
    };

    TestBed.configureTestingModule({
      providers: [SectionsService, { provide: Store, useValue: store }],
    });

    const service = TestBed.inject(SectionsService);
    
    // Call twice
    service.ensureInitialSections('angular', [{ title: 'A', content: 'a' }]);
    service.ensureInitialSections('angular', [{ title: 'A', content: 'a' }]);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('ensureInitialSections avoids adding sections that already exist (by title)', () => {
    const store = {
      dispatch: vi.fn(),
      select: vi.fn().mockReturnValue(of([{ id: 1, pageName: 'angular', title: 'Existing', content: 'c' }])),
    };

    TestBed.configureTestingModule({
      providers: [SectionsService, { provide: Store, useValue: store }],
    });

    const service = TestBed.inject(SectionsService);
    
    service.ensureInitialSections('angular', [
      { title: 'Existing', content: 'new content' }, // Should be skipped
      { title: 'New', content: 'new content' }      // Should be added
    ]);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      addSection({ section: expect.objectContaining({ title: 'New' }) })
    );
  });
});

