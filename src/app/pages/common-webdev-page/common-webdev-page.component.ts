import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { DynamicSectionFormComponent } from '../../shared/components/dynamic-section-form/dynamic-section-form.component';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { Section } from '../../models/section.model';
import { MenuService } from '../../core/services/menu.service';
import { SectionsService } from '../../core/services/sections.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-common-webdev-page',
  standalone: true,
  imports: [CommonModule, DynamicSectionFormComponent, SectionViewComponent, MatButtonModule],
  templateUrl: './common-webdev-page.component.html',
  styleUrls: ['./common-webdev-page.component.scss']
})
export class CommonWebdevPageComponent implements OnInit {
  // Lesson 4 Disable Services and Routes. private menuService = inject(MenuService);
  // Lesson 4 Disable Services and Routes. private sectionsService = inject(SectionsService);

  sections$!: Observable<Section[]>;
  showForm = false;

  ngOnInit(): void {
    const pageName = 'webdev';
    // Lesson 4 Disable Services and Routes. this.menuService.setCurrentPage(pageName);
    // Lesson 4 Disable Services and Routes. this.sectionsService.ensureInitialSections(pageName, [
    // Lesson 4 Disable Services and Routes.   {
    // Lesson 4 Disable Services and Routes.     title: 'HTML & Semantics',
    // Lesson 4 Disable Services and Routes.     content: 'Best practices for semantic markup and accessibility.'
    // Lesson 4 Disable Services and Routes.   },
    // Lesson 4 Disable Services and Routes.   {
    // Lesson 4 Disable Services and Routes.     title: 'CSS Layout',
    // Lesson 4 Disable Services and Routes.     content: 'Flexbox, Grid, and responsive design techniques.'
    // Lesson 4 Disable Services and Routes.   }
    // Lesson 4 Disable Services and Routes. ]);
    // Lesson 4 Disable Services and Routes. this.sections$ = this.sectionsService.getSectionsForPage(pageName);
    this.sections$ = of([]);
  }

  onSectionCreated(event: { title: string; content: string }): void {
    // Lesson 4 Disable Services and Routes. this.sectionsService.addSection('webdev', event.title, event.content);
    this.showForm = false;
  }
}

