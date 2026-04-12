import { Injectable } from '@angular/core';
// Lesson 5. (NgRx disabled) import { inject } from '@angular/core';
// Lesson 5. (NgRx disabled) import { Actions, ROOT_EFFECTS_INIT, createEffect, ofType } from '@ngrx/effects';
// Lesson 5. (NgRx disabled) import { Store } from '@ngrx/store';
// Lesson 5. (NgRx disabled) import { EMPTY } from 'rxjs';
// Lesson 5. (NgRx disabled) import { map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
// Lesson 5. (NgRx disabled) import { addSection, loadSectionsFromStorage, updateSection, removeSection, SectionEntity } from './sections.actions';
// Lesson 5. (NgRx disabled) import { selectAllSections } from './sections.selectors';
//
// Lesson 5. (NgRx disabled) const STORAGE_KEY = 'angularCampus.sections';
//
// Lesson 5. (NgRx disabled) @Injectable()
// Lesson 5. (NgRx disabled) export class SectionsEffects {
// Lesson 5. (NgRx disabled)   private actions$ = inject(Actions);
// Lesson 5. (NgRx disabled)   private store = inject(Store);
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   loadFromStorage$ = createEffect(() =>
// Lesson 5. (NgRx disabled)     this.actions$.pipe(
// Lesson 5. (NgRx disabled)       ofType(ROOT_EFFECTS_INIT),
// Lesson 5. (NgRx disabled)       switchMap(() => {
// Lesson 5. (NgRx disabled)         try {
// Lesson 5. (NgRx disabled)           const raw = localStorage.getItem(STORAGE_KEY);
// Lesson 5. (NgRx disabled)           if (!raw) {
// Lesson 5. (NgRx disabled)             return EMPTY;
// Lesson 5. (NgRx disabled)           }
// Lesson 5. (NgRx disabled)           const sections = JSON.parse(raw) as SectionEntity[];
// Lesson 5. (NgRx disabled)           return [loadSectionsFromStorage({ sections })];
// Lesson 5. (NgRx disabled)         } catch {
// Lesson 5. (NgRx disabled)           return EMPTY;
// Lesson 5. (NgRx disabled)         }
// Lesson 5. (NgRx disabled)       })
// Lesson 5. (NgRx disabled)     )
// Lesson 5. (NgRx disabled)   );
// Lesson 5. (NgRx disabled)
// Lesson 5. (NgRx disabled)   persistSections$ = createEffect(
// Lesson 5. (NgRx disabled)     () =>
// Lesson 5. (NgRx disabled)       this.actions$.pipe(
// Lesson 5. (NgRx disabled)         ofType(addSection, updateSection, removeSection, loadSectionsFromStorage),
// Lesson 5. (NgRx disabled)         withLatestFrom(this.store.select(selectAllSections)),
// Lesson 5. (NgRx disabled)         tap(([, sections]) => {
// Lesson 5. (NgRx disabled)           try {
// Lesson 5. (NgRx disabled)             localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
// Lesson 5. (NgRx disabled)           } catch {
// Lesson 5. (NgRx disabled)             ignore storage errors
// Lesson 5. (NgRx disabled)           }
// Lesson 5. (NgRx disabled)         })
// Lesson 5. (NgRx disabled)       ),
// Lesson 5. (NgRx disabled)     { dispatch: false }
// Lesson 5. (NgRx disabled)   );
// Lesson 5. (NgRx disabled) }

@Injectable()
export class SectionsEffects {
  // Lesson 5. (NgRx disabled) placeholder class (see commented NgRx implementation above)
}
