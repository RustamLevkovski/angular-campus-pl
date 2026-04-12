import { addSection, loadSectionsFromStorage, updateSection, removeSection } from './sections.actions';
import { initialSectionsState, sectionsReducer } from './sections.reducer';

describe('sectionsReducer', () => {
  it('returns initial state by default', () => {
    const next = sectionsReducer(undefined as any, { type: 'NOOP' } as any);
    expect(next).toEqual(initialSectionsState);
  });

  it('loads sections from storage (clones array)', () => {
    const sections = [{ id: 1, pageName: 'p', title: 't', content: 'c' }];
    const next = sectionsReducer(initialSectionsState, loadSectionsFromStorage({ sections }));
    expect(next.sections).toEqual(sections);
    expect(next.sections).not.toBe(sections);
  });

  it('adds section to end', () => {
    const s1 = { id: 1, pageName: 'p', title: 't', content: 'c' };
    const s2 = { id: 2, pageName: 'p', title: 't2', content: 'c2' };
    const state = { sections: [s1] };
    const next = sectionsReducer(state as any, addSection({ section: s2 }));
    expect(next.sections).toEqual([s1, s2]);
  });

  it('updates an existing section (strict match by id and pageName)', () => {
    const s1 = { id: 1, pageName: 'p1', title: 't1', content: 'c1' };
    const s2 = { id: 1, pageName: 'p2', title: 't2', content: 'c2' }; // Colliding ID on different page
    const state = { sections: [s1, s2] };
    const updatedS1 = { ...s1, title: 't1_updated' };
    const next = sectionsReducer(state as any, updateSection({ section: updatedS1 }));
    
    expect(next.sections[0]).toEqual(updatedS1);
    expect(next.sections[1]).toEqual(s2); // s2 should remain unchanged despite ID collision
  });

  it('removes a section by id', () => {
    const s1 = { id: 1, pageName: 'p', title: 't', content: 'c' };
    const s2 = { id: 2, pageName: 'p', title: 't2', content: 'c2' };
    const state = { sections: [s1, s2] };
    const next = sectionsReducer(state as any, removeSection({ id: 1 }));
    expect(next.sections).toEqual([s2]);
  });
});
