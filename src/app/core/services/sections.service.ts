import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { addSection, updateSection, removeSection, SectionEntity } from '../store/sections/sections.actions';
import { selectSectionsForPage } from '../store/sections/sections.selectors';

@Injectable({ providedIn: 'root' })
export class SectionsService {
  constructor(private store: Store) {}

  addSection(pageName: string, title: string, content: string): void {
    const id = Date.now();
    const section: SectionEntity = { id, pageName, title, content };
    this.store.dispatch(addSection({ section }));
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
    this.getSectionsForPage(pageName)
      .pipe(take(1))
      .subscribe((existing) => {
        if (existing.length === 0) {
          seeds.forEach((seed) => {
            this.addSection(pageName, seed.title, seed.content);
          });
        }
      });
  }
}

