import { createAction, props } from '@ngrx/store';

export interface SectionEntity {
  id: number;
  pageName: string;
  title: string;
  content: string;
}

export const addSection = createAction(
  '[Sections] Add Section',
  props<{ section: SectionEntity }>()
);

export const loadSectionsFromStorage = createAction(
  '[Sections] Load From Storage',
  props<{ sections: SectionEntity[] }>()
);

export const updateSection = createAction(
  '[Sections] Update Section',
  props<{ section: SectionEntity }>()
);

export const removeSection = createAction(
  '[Sections] Remove Section',
  props<{ id: number }>()
);
