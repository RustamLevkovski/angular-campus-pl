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
  selector: 'app-common-webdev-page',
  standalone: true,
  imports: [CommonModule, DynamicSectionFormComponent, SectionViewComponent, MatButtonModule],
  templateUrl: './common-webdev-page.component.html',
  styleUrls: ['./common-webdev-page.component.scss']
})
export class CommonWebdevPageComponent implements OnInit {
  private menuService = inject(MenuService);
  private sectionsService = inject(SectionsService);

  sections$!: Observable<Section[]>;
  showForm = false;

  ngOnInit(): void {
    const pageName = 'webdev';
    this.menuService.setCurrentPage(pageName);
    this.sectionsService.ensureInitialSections(pageName, [
      {
        title: 'HTML & Semantics',
        content: 'Best practices for semantic markup and accessibility.'
      },
      {
        title: 'CSS Layout',
        content: 'Flexbox, Grid, and responsive design techniques.'
      }
    ]);
    this.sections$ = this.sectionsService.getSectionsForPage(pageName);
  }

  onSectionCreated(event: { title: string; content: string }): void {
    this.sectionsService.addSection('webdev', event.title, event.content);
    this.showForm = false;
  }
}

