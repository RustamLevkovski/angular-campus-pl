import { Injectable, inject } from '@angular/core';
import { Actions, ROOT_EFFECTS_INIT, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { addSection, loadSectionsFromStorage, updateSection, removeSection, SectionEntity } from './sections.actions';
import { selectAllSections } from './sections.selectors';

const STORAGE_KEY = 'angularCampus.sections';

@Injectable()
export class SectionsEffects {
  private actions$ = inject(Actions);
  private store = inject(Store);

  loadFromStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      switchMap(() => {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (!raw) {
            return EMPTY;
          }
          const sections = JSON.parse(raw) as SectionEntity[];
          return [loadSectionsFromStorage({ sections })];
        } catch {
          return EMPTY;
        }
      })
    )
  );

  persistSections$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addSection, updateSection, removeSection, loadSectionsFromStorage),
        withLatestFrom(this.store.select(selectAllSections)),
        tap(([, sections]) => {
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
          } catch {
            // ignore storage errors
          }
        })
      ),
    { dispatch: false }
  );
}

