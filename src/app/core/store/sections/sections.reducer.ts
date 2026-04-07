import { createReducer, on } from '@ngrx/store';
import { addSection, loadSectionsFromStorage, updateSection, removeSection, SectionEntity } from './sections.actions';

export interface SectionsState {
  sections: SectionEntity[];
}

export const initialSectionsState: SectionsState = {
  sections: []
};

export const sectionsReducer = createReducer(
  initialSectionsState,
  on(loadSectionsFromStorage, (_state, { sections }) => ({
    sections: [...sections]
  })),
  on(addSection, (state, { section }) => ({
    sections: [...state.sections, section]
  })),
  on(updateSection, (state, { section }) => ({
    sections: state.sections.map(s => s.id === section.id ? section : s)
  })),
  on(removeSection, (state, { id }) => ({
    sections: state.sections.filter(s => s.id !== id)
  }))
);

export const sectionsFeatureKey = 'sections';

