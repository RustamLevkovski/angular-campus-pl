import { Injectable } from '@angular/core';

const STORAGE_KEY = 'angularCampus.sections';

@Injectable()
export class SectionsEffects {
  // Inject stream of dispatched actions.

  // Inject Store to read current sections when persisting.


  // Load persisted sections from localStorage when effects initialize.
  // create loadFromStorage$ effect:
  // - Listen for `ROOT_EFFECTS_INIT`. use ofType.
  // - Read `STORAGE_KEY` from localStorage and parse JSON.
  // - Dispatch `loadSectionsFromStorage` when data exists; otherwise return `EMPTY`.


  // Persist sections list after every mutation/load action.
  // create persistSection$:
  // - Listen to section-changing actions with `ofType(...)`.
  // - Combine action stream with latest sections using `withLatestFrom`.
  // - Save serialized sections into localStorage inside `tap`.
  // - Set `{ dispatch: false }` because this effect performs side effects only.

}

