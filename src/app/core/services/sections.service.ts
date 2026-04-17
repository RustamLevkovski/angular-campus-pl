import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Section } from '../../models/section.model';

@Injectable({ providedIn: 'root' })
export class SectionsService {

  private readonly storageKey = 'angularCampus.sections';
  private readonly sections$: BehaviorSubject<Section[]>;
  private initializedPages = new Set<string>();
  private lastId = 0;

  constructor() {
    const initial = this.safeReadFromStorage();
    for (const s of initial) {
      if (s.id > this.lastId) {
        this.lastId = s.id;
      }
    }
    this.sections$ = new BehaviorSubject<Section[]>(initial);
  }

  addSection(pageName: string, title: string, content: string): void {
    const id = this.generateId();
    const section: Section = { id, pageName, title, content };

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

  updateSection(section: Section): void {

    this.setSections(
      this.sections$.value.map((s) =>
        s.id === section.id && s.pageName === section.pageName ? section : s
      )
    );
  }

  removeSection(id: number): void {
    this.setSections(this.sections$.value.filter((s) => s.id !== id));
  }

  getSectionsForPage(pageName: string): Observable<Section[]> {
    return this.sections$.pipe(map((sections) => sections.filter((s) => s.pageName === pageName)));
  }

  ensureInitialSections(pageName: string, seeds: Omit<Section, 'id' | 'pageName'>[]): void {
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
            this.addSection(pageName, seed.title, seed.content as string);
          }
        });
      });
  }

  private setSections(sections: Section[]): void {
    this.sections$.next(sections);
    this.safeWriteToStorage(sections);
  }

  private safeReadFromStorage(): Section[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as Section[]) : [];
    } catch {
      return [];
    }
  }

  private safeWriteToStorage(sections: Section[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(sections));
    } catch {
      // ignore storage errors
    }
  }
}