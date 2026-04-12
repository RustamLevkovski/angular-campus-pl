import { Injectable } from '@angular/core';
// Lesson 5. (NgRx disabled) import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
// Lesson 5. (NgRx disabled) import { addSection, updateSection, removeSection, SectionEntity } from '../store/sections/sections.actions';
// Lesson 5. (NgRx disabled) import { selectSectionsForPage } from '../store/sections/sections.selectors';
import type { SectionEntity } from '../store/sections/sections.actions';

@Injectable({ providedIn: 'root' })
export class SectionsService {
  // Lesson 5. (NgRx disabled) private store = inject(Store);
  private readonly storageKey = 'angularCampus.sections';
  private readonly sections$: BehaviorSubject<SectionEntity[]>;
  private initializedPages = new Set<string>();
  private lastId = 0;

  constructor() {
    const initial = this.safeReadFromStorage();
    for (const s of initial) {
      if (s.id > this.lastId) {
        this.lastId = s.id;
      }
    }
    this.sections$ = new BehaviorSubject<SectionEntity[]>(initial);
  }

  addSection(pageName: string, title: string, content: string): void {
    const id = this.generateId();
    const section: SectionEntity = { id, pageName, title, content };
    // Lesson 5. (NgRx disabled) this.store.dispatch(addSection({ section }));
    const current = this.sections$.value;
    const exists = current.some((s) => s.id === section.id);
    if (exists) {
      return;
    }
    this.setSections([...current, section]);
  }

  private generateId(): number {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    let id = Number(`${timestamp}${random}`);

    if (id <= this.lastId) {
      id = this.lastId + 1;
    }
    this.lastId = id;
    return id;
  }

  updateSection(section: SectionEntity): void {
    // Lesson 5. (NgRx disabled) this.store.dispatch(updateSection({ section }));
    this.setSections(
      this.sections$.value.map((s) =>
        s.id === section.id && s.pageName === section.pageName ? section : s
      )
    );
  }

  removeSection(id: number): void {
    // Lesson 5. (NgRx disabled) this.store.dispatch(removeSection({ id }));
    this.setSections(this.sections$.value.filter((s) => s.id !== id));
  }

  getSectionsForPage(pageName: string): Observable<SectionEntity[]> {
    // Lesson 5. (NgRx disabled) return this.store.select(selectSectionsForPage(pageName));
    return this.sections$.pipe(map((sections) => sections.filter((s) => s.pageName === pageName)));
  }

  ensureInitialSections(pageName: string, seeds: Omit<SectionEntity, 'id' | 'pageName'>[]): void {
    if (this.initializedPages.has(pageName)) {
      return;
    }

    this.getSectionsForPage(pageName)
      .pipe(take(1))
      .subscribe((existing) => {
        this.initializedPages.add(pageName);
        seeds.forEach((seed) => {
          const alreadyExists = existing.some((s) => s.title === seed.title);
          if (!alreadyExists) {
            this.addSection(pageName, seed.title, seed.content);
          }
        });
      });
  }

  private setSections(sections: SectionEntity[]): void {
    this.sections$.next(sections);
    this.safeWriteToStorage(sections);
  }

  private safeReadFromStorage(): SectionEntity[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as SectionEntity[]) : [];
    } catch {
      return [];
    }
  }

  private safeWriteToStorage(sections: SectionEntity[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(sections));
    } catch {
      // ignore storage errors
    }
  }
}
