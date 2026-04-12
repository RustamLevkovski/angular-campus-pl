// Lesson 5. (NgRx disabled) import { createAction, props } from '@ngrx/store';

export interface SectionEntity {
  id: number;
  pageName: string;
  title: string;
  content: string;
}

// Lesson 5. (NgRx disabled) export const addSection = createAction(
// Lesson 5. (NgRx disabled)   '[Sections] Add Section',
// Lesson 5. (NgRx disabled)   props<{ section: SectionEntity }>()
// Lesson 5. (NgRx disabled) );
export const addSection = (payload: { section: SectionEntity }) =>
  ({ type: '[Sections] Add Section', ...payload }) as const;

// Lesson 5. (NgRx disabled) export const loadSectionsFromStorage = createAction(
// Lesson 5. (NgRx disabled)   '[Sections] Load From Storage',
// Lesson 5. (NgRx disabled)   props<{ sections: SectionEntity[] }>()
// Lesson 5. (NgRx disabled) );
export const loadSectionsFromStorage = (payload: { sections: SectionEntity[] }) =>
  ({ type: '[Sections] Load From Storage', ...payload }) as const;

// Lesson 5. (NgRx disabled) export const updateSection = createAction(
// Lesson 5. (NgRx disabled)   '[Sections] Update Section',
// Lesson 5. (NgRx disabled)   props<{ section: SectionEntity }>()
// Lesson 5. (NgRx disabled) );
export const updateSection = (payload: { section: SectionEntity }) =>
  ({ type: '[Sections] Update Section', ...payload }) as const;

// Lesson 5. (NgRx disabled) export const removeSection = createAction(
// Lesson 5. (NgRx disabled)   '[Sections] Remove Section',
// Lesson 5. (NgRx disabled)   props<{ id: number }>()
// Lesson 5. (NgRx disabled) );
export const removeSection = (payload: { id: number }) =>
  ({ type: '[Sections] Remove Section', ...payload }) as const;
