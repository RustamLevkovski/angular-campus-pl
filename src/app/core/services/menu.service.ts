import {  Injectable } from '@angular/core';

export interface SectionNavItem {
  label: string;
  anchor: string;
}

@Injectable({ providedIn: 'root' })
export class MenuService {
  // Steps to implement:  currentPageName$ 
  // - Create a private `BehaviorSubject` to store the currently selected page name.
  // - Use the type `string | null` so the initial state can be empty before a page is set.
  // - Initialize it with `null` so no sections are loaded until a page is chosen.
  // - Mark it `private readonly` so only this service can update it and the reference cannot be reassigned.
  

  // Steps to implement:
  // - Inject `SectionsService` with the `inject(...)` function.
  // - Expose it as a readonly property so class members can reuse the same dependency.
  // - Keep this property public/readonly when templates or tests may need to access it.
 

  // Steps to implement:
  // - Create a derived Observable: sections$ from `currentPageName$` using `.pipe(...)`.
  // - Use `switchMap(...)` to load sections for the latest page and cancel older streams.
  // - Return `of([])` when `pageName` is `null` so subscribers always receive an array.
  // - Use `map(...)` to transform each section into a nav item shape:
  //   - `label` from `section.title`
  //   - `anchor` as `#section-${section.id}`
  // - Type the property as `Observable<SectionNavItem[]>` to document the output contract.


  // - add parameters to this method:
  //   - pageName: string
  //
  // Steps to implement:
  // - Receive the active page name from the component that is currently loaded.
  // - Push that value into `currentPageName$` using `.next(...)`.
  // - Let the existing `sections$` pipeline react automatically and load navigation items.
  setCurrentPage() {
  
  }
}
