import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SectionsService } from './sections.service';

export interface SectionNavItem {
  label: string;
  anchor: string;
}

@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly currentPageName$ = new BehaviorSubject<string | null>(null);

  constructor(private sectionsService: SectionsService) {}

  readonly sections$: Observable<SectionNavItem[]> = this.currentPageName$.pipe(
    // Lesson 4 Disable Services and Routes. switchMap((pageName) =>
    // Lesson 4 Disable Services and Routes.   pageName ? this.sectionsService.getSectionsForPage(pageName) : of([])
    // Lesson 4 Disable Services and Routes. ),
    // Lesson 4 Disable Services and Routes. map((sections) =>
    // Lesson 4 Disable Services and Routes.   sections.map((s) => ({
    // Lesson 4 Disable Services and Routes.     label: s.title,
    // Lesson 4 Disable Services and Routes.     anchor: `#section-${s.id}`
    // Lesson 4 Disable Services and Routes.   }))
    // Lesson 4 Disable Services and Routes. )
    switchMap(() => of([]))
  );

  setCurrentPage(pageName: string): void {
    // Lesson 4 Disable Services and Routes. this.currentPageName$.next(pageName);
  }
}

