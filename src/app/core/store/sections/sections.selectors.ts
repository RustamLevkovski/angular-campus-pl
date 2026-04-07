import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SectionsState, sectionsFeatureKey } from './sections.reducer';

export const selectSectionsState =
  createFeatureSelector<SectionsState>(sectionsFeatureKey);

export const selectAllSections = createSelector(
  selectSectionsState,
  (state) => state.sections
);

export const selectSectionsForPage = (pageName: string) =>
  createSelector(selectAllSections, (sections) =>
    sections.filter((s) => s.pageName === pageName)
  );

