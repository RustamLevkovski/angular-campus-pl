import { TestBed } from '@angular/core/testing';
// Lesson 5. (NgRx disabled) import { Store } from '@ngrx/store';
// Lesson 5. (NgRx disabled) import { of } from 'rxjs';
// Lesson 5. (NgRx disabled) import { addSection, updateSection, removeSection } from '../store/sections/sections.actions';
// Lesson 5. (NgRx disabled) import { SectionsService } from './sections.service';

describe('SectionsService', () => {
  it.skip('Lesson 5. (NgRx disabled) store-dispatch tests are commented out', () => {
    // Lesson 5. (NgRx disabled) intentionally skipped
  });
});

// Lesson 5. (NgRx disabled) describe('SectionsService', () => {
// Lesson 5. (NgRx disabled)   it('addSection dispatches addSection action with unique ids', () => {
// Lesson 5. (NgRx disabled)     const store = {
// Lesson 5. (NgRx disabled)       dispatch: vi.fn(),
// Lesson 5. (NgRx disabled)       select: vi.fn(),
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [SectionsService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(SectionsService);
// Lesson 5. (NgRx disabled)     vi.spyOn(Date, 'now').mockReturnValue(123);
// Lesson 5. (NgRx disabled)     vi.spyOn(Math, 'random').mockReturnValue(0.456); (result: 456)
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     service.addSection('angular', 'Title 1', 'Content 1');
// Lesson 5. (NgRx disabled)     service.addSection('angular', 'Title 2', 'Content 2');
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     expect(store.dispatch).toHaveBeenCalledTimes(2);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     ID = "123" + "456" = 123456
// Lesson 5. (NgRx disabled)     expect(store.dispatch).toHaveBeenNthCalledWith(1,
// Lesson 5. (NgRx disabled)       addSection({ section: expect.objectContaining({ id: 123456, title: 'Title 1' }) })
// Lesson 5. (NgRx disabled)     );
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     Second call with same mock should have ID 123457 (because 123456 <= 123456, so lastId + 1)
// Lesson 5. (NgRx disabled)     expect(store.dispatch).toHaveBeenNthCalledWith(2,
// Lesson 5. (NgRx disabled)       addSection({ section: expect.objectContaining({ id: 123457, title: 'Title 2' }) })
// Lesson 5. (NgRx disabled)     );
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('updateSection dispatches updateSection action', () => {
// Lesson 5. (NgRx disabled)     const store = { dispatch: vi.fn(), select: vi.fn() };
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [SectionsService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(SectionsService);
// Lesson 5. (NgRx disabled)     const section = { id: 1, pageName: 'angular', title: 'Title', content: 'Content' };
// Lesson 5. (NgRx disabled)     service.updateSection(section);
// Lesson 5. (NgRx disabled)     expect(store.dispatch).toHaveBeenCalledWith(updateSection({ section }));
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('removeSection dispatches removeSection action', () => {
// Lesson 5. (NgRx disabled)     const store = { dispatch: vi.fn(), select: vi.fn() };
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [SectionsService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(SectionsService);
// Lesson 5. (NgRx disabled)     service.removeSection(1);
// Lesson 5. (NgRx disabled)     expect(store.dispatch).toHaveBeenCalledWith(removeSection({ id: 1 }));
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('getSectionsForPage selects with selector', () => {
// Lesson 5. (NgRx disabled)     const store = {
// Lesson 5. (NgRx disabled)       dispatch: vi.fn(),
// Lesson 5. (NgRx disabled)       select: vi.fn().mockReturnValue(of([{ id: 1, pageName: 'p', title: 't', content: 'c' }])),
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [SectionsService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(SectionsService);
// Lesson 5. (NgRx disabled)     service.getSectionsForPage('p').subscribe();
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     expect(store.select).toHaveBeenCalledTimes(1);
// Lesson 5. (NgRx disabled)     expect(store.select.mock.calls[0]?.[0]).toBeTypeOf('function');
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('ensureInitialSections seeds only when empty', () => {
// Lesson 5. (NgRx disabled)     const store = {
// Lesson 5. (NgRx disabled)       dispatch: vi.fn(),
// Lesson 5. (NgRx disabled)       select: vi.fn().mockReturnValue(of([])),
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [SectionsService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(SectionsService);
// Lesson 5. (NgRx disabled)     vi.spyOn(Date, 'now').mockReturnValue(1);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     service.ensureInitialSections('angular', [
// Lesson 5. (NgRx disabled)       { title: 'A', content: 'a' },
// Lesson 5. (NgRx disabled)       { title: 'B', content: 'b' },
// Lesson 5. (NgRx disabled)     ]);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     expect(store.dispatch).toHaveBeenCalledTimes(2);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('ensureInitialSections does not seed when already present', () => {
// Lesson 5. (NgRx disabled)     const store = {
// Lesson 5. (NgRx disabled)       dispatch: vi.fn(),
// Lesson 5. (NgRx disabled)       select: vi.fn().mockReturnValue(of([{ id: 1, pageName: 'angular', title: 'T', content: 'C' }])),
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [SectionsService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(SectionsService);
// Lesson 5. (NgRx disabled)     service.ensureInitialSections('angular', [{ title: 'A', content: 'a' }]);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     expect(store.dispatch).not.toHaveBeenCalled();
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)   it('ensureInitialSections avoids duplicate calls for the same page session', () => {
// Lesson 5. (NgRx disabled)     const store = {
// Lesson 5. (NgRx disabled)       dispatch: vi.fn(),
// Lesson 5. (NgRx disabled)       select: vi.fn().mockReturnValue(of([])),
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [SectionsService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(SectionsService);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     Call twice
// Lesson 5. (NgRx disabled)     service.ensureInitialSections('angular', [{ title: 'A', content: 'a' }]);
// Lesson 5. (NgRx disabled)     service.ensureInitialSections('angular', [{ title: 'A', content: 'a' }]);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     expect(store.dispatch).toHaveBeenCalledTimes(1);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('ensureInitialSections avoids adding sections that already exist (by title)', () => {
// Lesson 5. (NgRx disabled)     const store = {
// Lesson 5. (NgRx disabled)       dispatch: vi.fn(),
// Lesson 5. (NgRx disabled)       select: vi.fn().mockReturnValue(of([{ id: 1, pageName: 'angular', title: 'Existing', content: 'c' }])),
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     TestBed.configureTestingModule({
// Lesson 5. (NgRx disabled)       providers: [SectionsService, { provide: Store, useValue: store }],
// Lesson 5. (NgRx disabled)     });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     const service = TestBed.inject(SectionsService);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     service.ensureInitialSections('angular', [
// Lesson 5. (NgRx disabled)       { title: 'Existing', content: 'new content' }, (Should be skipped)
// Lesson 5. (NgRx disabled)       { title: 'New', content: 'new content' }      (Should be added)
// Lesson 5. (NgRx disabled)     ]);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     expect(store.dispatch).toHaveBeenCalledTimes(1);
// Lesson 5. (NgRx disabled)     expect(store.dispatch).toHaveBeenCalledWith(
// Lesson 5. (NgRx disabled)       addSection({ section: expect.objectContaining({ title: 'New' }) })
// Lesson 5. (NgRx disabled)     );
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled) });
