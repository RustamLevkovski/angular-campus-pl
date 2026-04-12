// Lesson 5. (NgRx disabled) import { addSection, loadSectionsFromStorage, updateSection, removeSection } from './sections.actions';
// Lesson 5. (NgRx disabled) import { initialSectionsState, sectionsReducer } from './sections.reducer';

describe('sectionsReducer', () => {
  it.skip('Lesson 5. (NgRx disabled) reducer tests are commented out', () => {
    // Lesson 5. (NgRx disabled) intentionally skipped
  });
});

// Lesson 5. (NgRx disabled) describe('sectionsReducer', () => {
// Lesson 5. (NgRx disabled)   it('returns initial state by default', () => {
// Lesson 5. (NgRx disabled)     const next = sectionsReducer(undefined as any, { type: 'NOOP' } as any);
// Lesson 5. (NgRx disabled)     expect(next).toEqual(initialSectionsState);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('loads sections from storage (clones array)', () => {
// Lesson 5. (NgRx disabled)     const sections = [{ id: 1, pageName: 'p', title: 't', content: 'c' }];
// Lesson 5. (NgRx disabled)     const next = sectionsReducer(initialSectionsState, loadSectionsFromStorage({ sections }));
// Lesson 5. (NgRx disabled)     expect(next.sections).toEqual(sections);
// Lesson 5. (NgRx disabled)     expect(next.sections).not.toBe(sections);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('adds section to end', () => {
// Lesson 5. (NgRx disabled)     const s1 = { id: 1, pageName: 'p', title: 't', content: 'c' };
// Lesson 5. (NgRx disabled)     const s2 = { id: 2, pageName: 'p', title: 't2', content: 'c2' };
// Lesson 5. (NgRx disabled)     const state = { sections: [s1] };
// Lesson 5. (NgRx disabled)     const next = sectionsReducer(state as any, addSection({ section: s2 }));
// Lesson 5. (NgRx disabled)     expect(next.sections).toEqual([s1, s2]);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('updates an existing section (strict match by id and pageName)', () => {
// Lesson 5. (NgRx disabled)     const s1 = { id: 1, pageName: 'p1', title: 't1', content: 'c1' };
// Lesson 5. (NgRx disabled)     const s2 = { id: 1, pageName: 'p2', title: 't2', content: 'c2' }; (Colliding ID on different page)
// Lesson 5. (NgRx disabled)     const state = { sections: [s1, s2] };
// Lesson 5. (NgRx disabled)     const updatedS1 = { ...s1, title: 't1_updated' };
// Lesson 5. (NgRx disabled)     const next = sectionsReducer(state as any, updateSection({ section: updatedS1 }));
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)     expect(next.sections[0]).toEqual(updatedS1);
// Lesson 5. (NgRx disabled)     expect(next.sections[1]).toEqual(s2); (s2 should remain unchanged despite ID collision)
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('removes a section by id', () => {
// Lesson 5. (NgRx disabled)     const s1 = { id: 1, pageName: 'p', title: 't', content: 'c' };
// Lesson 5. (NgRx disabled)     const s2 = { id: 2, pageName: 'p', title: 't2', content: 'c2' };
// Lesson 5. (NgRx disabled)     const state = { sections: [s1, s2] };
// Lesson 5. (NgRx disabled)     const next = sectionsReducer(state as any, removeSection({ id: 1 }));
// Lesson 5. (NgRx disabled)     expect(next.sections).toEqual([s2]);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled) });
