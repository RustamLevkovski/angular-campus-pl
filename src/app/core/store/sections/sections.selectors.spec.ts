import { selectAllSections, selectSectionsForPage } from './sections.selectors';
import { SectionsState } from './sections.reducer';

describe('sections selectors', () => {
  it('selectAllSections projects sections array', () => {
    const state: SectionsState = {
      sections: [{ id: 1, pageName: 'p', title: 't', content: 'c' }],
    };
    expect(selectAllSections.projector(state)).toEqual(state.sections);
  });

  it('selectSectionsForPage filters by pageName', () => {
    const all = [
      { id: 1, pageName: 'a', title: 't', content: 'c' },
      { id: 2, pageName: 'b', title: 't', content: 'c' },
      { id: 3, pageName: 'a', title: 't', content: 'c' },
    ];
    const selector = selectSectionsForPage('a');
    expect(selector.projector(all as any)).toEqual([all[0], all[2]]);
  });
});

