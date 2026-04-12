// Lesson 5. (NgRx disabled) import { selectAllSections, selectSectionsForPage } from './sections.selectors';
// Lesson 5. (NgRx disabled) import { SectionsState } from './sections.reducer';

describe('sections selectors', () => {
  it.skip('Lesson 5. (NgRx disabled) selector tests are commented out', () => {
    // Lesson 5. (NgRx disabled) intentionally skipped
  });
});

// Lesson 5. (NgRx disabled) describe('sections selectors', () => {
// Lesson 5. (NgRx disabled)   it('selectAllSections projects sections array', () => {
// Lesson 5. (NgRx disabled)     const state: SectionsState = {
// Lesson 5. (NgRx disabled)       sections: [{ id: 1, pageName: 'p', title: 't', content: 'c' }],
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)     expect(selectAllSections.projector(state)).toEqual(state.sections);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   it('selectSectionsForPage filters by pageName', () => {
// Lesson 5. (NgRx disabled)     const all = [
// Lesson 5. (NgRx disabled)       { id: 1, pageName: 'a', title: 't', content: 'c' },
// Lesson 5. (NgRx disabled)       { id: 2, pageName: 'b', title: 't', content: 'c' },
// Lesson 5. (NgRx disabled)       { id: 3, pageName: 'a', title: 't', content: 'c' },
// Lesson 5. (NgRx disabled)     ];
// Lesson 5. (NgRx disabled)     const selector = selectSectionsForPage('a');
// Lesson 5. (NgRx disabled)     expect(selector.projector(all as any)).toEqual([all[0], all[2]]);
// Lesson 5. (NgRx disabled)   });
// Lesson 5. (NgRx disabled) });
