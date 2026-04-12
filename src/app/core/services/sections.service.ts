import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { addSection, updateSection, removeSection, SectionEntity } from '../store/sections/sections.actions';
import { selectSectionsForPage } from '../store/sections/sections.selectors';

@Injectable({ providedIn: 'root' })
export class SectionsService {
  private store = inject(Store);
  private initializedPages = new Set<string>();
  private lastId = 0;

  constructor() {}

  addSection(pageName: string, title: string, content: string): void {
    const id = this.generateId();
    const section: SectionEntity = { id, pageName, title, content };
    this.store.dispatch(addSection({ section }));
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
    this.store.dispatch(updateSection({ section }));
  }

  removeSection(id: number): void {
    this.store.dispatch(removeSection({ id }));
  }

  getSectionsForPage(pageName: string): Observable<SectionEntity[]> {
    return this.store.select(selectSectionsForPage(pageName));
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
}

