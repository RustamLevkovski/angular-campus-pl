import { Injectable,  } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SectionEntity } from '../store/sections/sections.actions';
import { Section } from '../../models/section.model';

@Injectable({ providedIn: 'root' })
export class SectionsService {
  // Inject Store

  // Remove it
  private readonly storageKey = 'angularCampus.sections';
  // Remove it
  private readonly sections$: BehaviorSubject<Section[]>;

  private initializedPages = new Set<string>();
  private lastId = 0;

  // Remove contructor
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
    const section: SectionEntity = { id, pageName, title, content };

    // Replace logic below to store
    const current = this.sections$.value;
    const exists = current.some((s) => s.id === section.id);
    if (exists) {
      return;
    }
    this.setSections([...current, section]);

    // Dispatch add section to the store. 

  }

  // remove it
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
    // Dispatch updateSection event to the store

    this.setSections(
      this.sections$.value.map((s) =>
        s.id === section.id && s.pageName === section.pageName ? section : s
      )
    );
  }

  removeSection(id: number): void {
    // Dispatch remove section event to the store
    this.setSections(this.sections$.value.filter((s) => s.id !== id));
  }

  // Replace return observable type to SectionEntity
  getSectionsForPage(pageName: string):  Observable<Section[]> {
  // Dispatch selectSectionsForPage event to the store
    return this.sections$.pipe(map((sections) => sections.filter((s) => s.pageName === pageName)));

  }

  ensureInitialSections(pageName: string, seeds: Omit<SectionEntity, 'id' | 'pageName'>[]): void {
    // Prevent duplicate initialization attempts for the same page session
    if (this.initializedPages.has(pageName)) {
      return;
    }

    this.getSectionsForPage(pageName)
      .pipe(take(1))
      .subscribe((existing) => {
        this.initializedPages.add(pageName);
        seeds.forEach((seed) => {
          const alreadyExists = existing.some(s => s.title === seed.title);
          if (!alreadyExists) {
            this.addSection(pageName, seed.title, seed.content);
          }
        });
      });
  }

  // Remove it
  private setSections(sections: Section[]): void {
    this.sections$.next(sections);
    this.safeWriteToStorage(sections);
  }

  // Remove it
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

  // Remove it
  private safeWriteToStorage(sections: Section[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(sections));
    } catch {
      // ignore storage errors
    }
  }
}

