import { createAction, props } from '@ngrx/store';

export interface SectionEntity {
  id: number;
  pageName: string;
  title: string;
  content: string;
}

// Dispatch when creating a new section.
// Create addSection action: '[Sections] Add Section'
// - Define payload with full `SectionEntity`.
// - Keep action type string descriptive and scoped by feature.


// Dispatch when restoring saved sections from storage.
// Create loadSectionsFromStorage action: '[Sections] Load From Storage'
// - Define payload as `SectionEntity[]`.
// - Dispatch from effect/app initialization after parsing storage.


// Dispatch when editing an existing section.
// Create updateSection action: '[Sections] Update Section'
// - Keep payload as full replacement `SectionEntity`.
// - Reducer can identify target by id/pageName and replace item immutably.

// Dispatch when deleting a section by identifier.
// removeSection action: '[Sections] Remove Section' 
// - Keep payload minimal: only the `id`.
// - Reducer removes matching item from state list.

