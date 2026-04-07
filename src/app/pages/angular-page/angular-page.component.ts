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
  selector: 'app-angular-page',
  standalone: true,
  imports: [CommonModule, DynamicSectionFormComponent, SectionViewComponent, MatButtonModule],
  templateUrl: './angular-page.component.html',
  styleUrls: ['./angular-page.component.scss']
})
export class AngularPageComponent implements OnInit {
  private menuService = inject(MenuService);
  private sectionsService = inject(SectionsService);

  sections$!: Observable<Section[]>;
  showForm = false;

  ngOnInit(): void {
    const pageName = 'angular';
    this.menuService.setCurrentPage(pageName);
    this.sectionsService.ensureInitialSections(pageName, [
      {
        title: 'Components & Templates',
        content: 'Learn how to build components, templates, and bindings in Angular.'
      },
      {
        title: 'Dependency Injection',
        content: 'Understand providers, injectors, and how Angular DI works.'
      }
    ]);
    this.sections$ = this.sectionsService.getSectionsForPage(pageName);
  }

  onSectionCreated(event: { title: string; content: string }): void {
    this.sectionsService.addSection('angular', event.title, event.content);
    this.showForm = false;
  }
}

