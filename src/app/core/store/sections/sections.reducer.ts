import { SectionEntity } from './sections.actions';

export interface SectionsState {
  sections: SectionEntity[];
}

export const initialSectionsState: SectionsState = {
  sections: []
};

// Build reducer for sections feature.
// create sectionsReducer:
// - Start from `initialSectionsState`.
// - Add one `on(...)` handler per section action: loadSectionsFromStorage, addSection etc.
// - Always clone arrays/objects to preserve immutability.


export const sectionsFeatureKey = 'sections';

