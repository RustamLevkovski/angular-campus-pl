// Lesson 5. (NgRx disabled) import { createReducer, on } from '@ngrx/store';
import { SectionEntity } from './sections.actions';

export interface SectionsState {
  sections: SectionEntity[];
}

export const initialSectionsState: SectionsState = {
  sections: [],
};

// Lesson 5. (NgRx disabled) export const sectionsReducer = createReducer(
// Lesson 5. (NgRx disabled)   initialSectionsState,
// Lesson 5. (NgRx disabled)   on(loadSectionsFromStorage, (_state, { sections }) => ({
// Lesson 5. (NgRx disabled)     sections: [...sections]
// Lesson 5. (NgRx disabled)   })),
// Lesson 5. (NgRx disabled)   on(addSection, (state, { section }) => {
// Lesson 5. (NgRx disabled)     const exists = state.sections.some(s => s.id === section.id);
// Lesson 5. (NgRx disabled)     if (exists) {
// Lesson 5. (NgRx disabled)       return state;
// Lesson 5. (NgRx disabled)     }
// Lesson 5. (NgRx disabled)     return {
// Lesson 5. (NgRx disabled)       ...state,
// Lesson 5. (NgRx disabled)       sections: [...state.sections, section]
// Lesson 5. (NgRx disabled)     };
// Lesson 5. (NgRx disabled)   }),
// Lesson 5. (NgRx disabled)   on(updateSection, (state, { section }) => ({
// Lesson 5. (NgRx disabled)     sections: state.sections.map(s => (s.id === section.id && s.pageName === section.pageName) ? section : s)
// Lesson 5. (NgRx disabled)   })),
// Lesson 5. (NgRx disabled)   on(removeSection, (state, { id }) => ({
// Lesson 5. (NgRx disabled)     sections: state.sections.filter(s => s.id !== id)
// Lesson 5. (NgRx disabled)   }))
// Lesson 5. (NgRx disabled) );
export const sectionsReducer = (state: SectionsState = initialSectionsState, _action: unknown): SectionsState => {
  // Lesson 5. (NgRx disabled) No-op reducer placeholder
  return state;
};

export const sectionsFeatureKey = 'sections';
