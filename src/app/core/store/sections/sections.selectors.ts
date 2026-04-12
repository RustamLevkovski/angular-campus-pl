// Lesson 5. (NgRx disabled) import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SectionsState } from './sections.reducer';

// Lesson 5. (NgRx disabled) export const selectSectionsState =
// Lesson 5. (NgRx disabled)   createFeatureSelector<SectionsState>(sectionsFeatureKey);
export const selectSectionsState = ((state: any) => state?.sections) as any;

// Lesson 5. (NgRx disabled) export const selectAllSections = createSelector(
// Lesson 5. (NgRx disabled)   selectSectionsState,
// Lesson 5. (NgRx disabled)   (state) => state.sections
// Lesson 5. (NgRx disabled) );
export const selectAllSections = ((state: SectionsState) => state.sections) as any;

export const selectSectionsForPage = (pageName: string) =>
  // Lesson 5. (NgRx disabled) createSelector(selectAllSections, (sections) =>
  // Lesson 5. (NgRx disabled)   sections.filter((s) => s.pageName === pageName)
  // Lesson 5. (NgRx disabled) );
  ((sections: any[]) =>
    Array.isArray(sections) ? sections.filter((s) => s?.pageName === pageName) : []) as any;
