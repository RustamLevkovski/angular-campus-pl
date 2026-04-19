
// Select full sections feature state from root store.
// create selectSectionsState:
// - Export a unique feature key (e.g. `sectionsFeatureKey`) from reducer.
// - Register reducer under that key in app config.
// - Use `createFeatureSelector<SectionsState>(sectionsFeatureKey)`.


// Select complete sections array.
//create selectAllSections:
// - Use `createSelector(selectSectionsState, state => state.sections)`.
// - Keep this as base selector for further filtering.


// Select sections for one page by name.
// create selectSectionsForPage:
// - Create a selector factory that accepts `pageName`.
// - Filter array in projector to include only matching sections.
// - Use in components/services as `store.select(selectSectionsForPage(name))`.

