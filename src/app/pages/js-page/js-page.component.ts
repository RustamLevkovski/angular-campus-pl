import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DynamicSectionFormComponent } from '../../shared/components/dynamic-section-form/dynamic-section-form.component';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { Section } from '../../models/section.model';
import { MenuService } from '../../core/services/menu.service';
import { SectionsService } from '../../core/services/sections.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-js-page',
  standalone: true,
  imports: [CommonModule, DynamicSectionFormComponent, SectionViewComponent, MatButtonModule],
  templateUrl: './js-page.component.html',
  styleUrls: ['./js-page.component.scss']
})
export class JsPageComponent implements OnInit {
  private menuService = inject(MenuService);
  private sectionsService = inject(SectionsService);

  sections$!: Observable<Section[]>;
  showForm = false;

  ngOnInit(): void {
    const pageName = 'javascript';
    this.menuService.setCurrentPage(pageName);
    this.sectionsService.ensureInitialSections(pageName, [
      {
        title: 'ES6+ Features',
        content: 'Let, const, arrow functions, classes, and modules.'
      },
      {
        title: 'Asynchronous JS',
        content: 'Callbacks, Promises, async/await, and event loop basics.'
      }
    ]);
    this.sections$ = this.sectionsService.getSectionsForPage(pageName);
  }

  onSectionCreated(event: { title: string; content: string }): void {
    this.sectionsService.addSection('javascript', event.title, event.content);
    this.showForm = false;
  }
}
