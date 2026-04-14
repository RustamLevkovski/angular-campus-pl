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
  // Lesson 4 Disable Services and Routes. private readonly storageKey = 'angularCampus.sections';
  // Lesson 4 Disable Services and Routes. private readonly sections$: BehaviorSubject<SectionEntity[]>;
  // Lesson 4 Disable Services and Routes. private initializedPages = new Set<string>();
  // Lesson 4 Disable Services and Routes. private lastId = 0;

  constructor() {
    // Lesson 4 Disable Services and Routes. const initial = this.safeReadFromStorage();
    // Lesson 4 Disable Services and Routes. for (const s of initial) {
    // Lesson 4 Disable Services and Routes.   if (s.id > this.lastId) {
    // Lesson 4 Disable Services and Routes.     this.lastId = s.id;
    // Lesson 4 Disable Services and Routes.   }
    // Lesson 4 Disable Services and Routes. }
    // Lesson 4 Disable Services and Routes. this.sections$ = new BehaviorSubject<SectionEntity[]>(initial);
  }

  addSection(pageName: string, title: string, content: string): void {
    // Lesson 4 Disable Services and Routes. const id = this.generateId();
    // Lesson 4 Disable Services and Routes. const section: SectionEntity = { id, pageName, title, content };
    // Lesson 5. (NgRx disabled) this.store.dispatch(addSection({ section }));
    // Lesson 4 Disable Services and Routes. const current = this.sections$.value;
    // Lesson 4 Disable Services and Routes. const exists = current.some((s) => s.id === section.id);
    // Lesson 4 Disable Services and Routes. if (exists) {
    // Lesson 4 Disable Services and Routes.   return;
    // Lesson 4 Disable Services and Routes. }
    // Lesson 4 Disable Services and Routes. this.setSections([...current, section]);
  }

  private generateId(): number {
    // Lesson 4 Disable Services and Routes. const timestamp = Date.now();
    // Lesson 4 Disable Services and Routes. const random = Math.floor(Math.random() * 1000);
    // Lesson 4 Disable Services and Routes. let id = Number(`${timestamp}${random}`);
    // Lesson 4 Disable Services and Routes.
    // Lesson 4 Disable Services and Routes. if (id <= this.lastId) {
    // Lesson 4 Disable Services and Routes.   id = this.lastId + 1;
    // Lesson 4 Disable Services and Routes. }
    // Lesson 4 Disable Services and Routes. this.lastId = id;
    // Lesson 4 Disable Services and Routes. return id;
    return 0;
  }

  updateSection(section: SectionEntity): void {
    // Lesson 5. (NgRx disabled) this.store.dispatch(updateSection({ section }));
    // Lesson 4 Disable Services and Routes. this.setSections(
    // Lesson 4 Disable Services and Routes.   this.sections$.value.map((s) =>
    // Lesson 4 Disable Services and Routes.     s.id === section.id && s.pageName === section.pageName ? section : s
    // Lesson 4 Disable Services and Routes.   )
    // Lesson 4 Disable Services and Routes. );
  }

  removeSection(id: number): void {
    // Lesson 5. (NgRx disabled) this.store.dispatch(removeSection({ id }));
    // Lesson 4 Disable Services and Routes. this.setSections(this.sections$.value.filter((s) => s.id !== id));
  }

  getSectionsForPage(pageName: string): Observable<SectionEntity[]> {
    // Lesson 5. (NgRx disabled) return this.store.select(selectSectionsForPage(pageName));
    // Lesson 4 Disable Services and Routes. return this.sections$.pipe(map((sections) => sections.filter((s) => s.pageName === pageName)));
    return new BehaviorSubject<SectionEntity[]>([]).asObservable();
  }

  ensureInitialSections(pageName: string, seeds: Omit<SectionEntity, 'id' | 'pageName'>[]): void {
    // Lesson 4 Disable Services and Routes. if (this.initializedPages.has(pageName)) {
    // Lesson 4 Disable Services and Routes.   return;
    // Lesson 4 Disable Services and Routes. }
    // Lesson 4 Disable Services and Routes.
    // Lesson 4 Disable Services and Routes. this.getSectionsForPage(pageName)
    // Lesson 4 Disable Services and Routes.   .pipe(take(1))
    // Lesson 4 Disable Services and Routes.   .subscribe((existing) => {
    // Lesson 4 Disable Services and Routes.     this.initializedPages.add(pageName);
    // Lesson 4 Disable Services and Routes.     seeds.forEach((seed) => {
    // Lesson 4 Disable Services and Routes.       const alreadyExists = existing.some((s) => s.title === seed.title);
    // Lesson 4 Disable Services and Routes.       if (!alreadyExists) {
    // Lesson 4 Disable Services and Routes.         this.addSection(pageName, seed.title, seed.content);
    // Lesson 4 Disable Services and Routes.       }
    // Lesson 4 Disable Services and Routes.     });
    // Lesson 4 Disable Services and Routes.   });
  }

  private setSections(sections: SectionEntity[]): void {
    // Lesson 4 Disable Services and Routes. this.sections$.next(sections);
    // Lesson 4 Disable Services and Routes. this.safeWriteToStorage(sections);
  }

  private safeReadFromStorage(): SectionEntity[] {
    // Lesson 4 Disable Services and Routes. try {
    // Lesson 4 Disable Services and Routes.   const raw = localStorage.getItem(this.storageKey);
    // Lesson 4 Disable Services and Routes.   if (!raw) return [];
    // Lesson 4 Disable Services and Routes.   const parsed = JSON.parse(raw);
    // Lesson 4 Disable Services and Routes.   return Array.isArray(parsed) ? (parsed as SectionEntity[]) : [];
    // Lesson 4 Disable Services and Routes. } catch {
    // Lesson 4 Disable Services and Routes.   return [];
    // Lesson 4 Disable Services and Routes. }
    return [];
  }

  private safeWriteToStorage(sections: SectionEntity[]): void {
    // Lesson 4 Disable Services and Routes. try {
    // Lesson 4 Disable Services and Routes.   localStorage.setItem(this.storageKey, JSON.stringify(sections));
    // Lesson 4 Disable Services and Routes. } catch {
    // Lesson 4 Disable Services and Routes.   // ignore storage errors
    // Lesson 4 Disable Services and Routes. }
  }
}
