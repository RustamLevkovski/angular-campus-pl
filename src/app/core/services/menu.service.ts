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
    switchMap((pageName) =>
      pageName ? this.sectionsService.getSectionsForPage(pageName) : of([])
    ),
    map((sections) =>
      sections.map((s) => ({
        label: s.title,
        anchor: `#section-${s.id}`
      }))
    )
  );

  setCurrentPage(pageName: string): void {
    this.currentPageName$.next(pageName);
  }
}

