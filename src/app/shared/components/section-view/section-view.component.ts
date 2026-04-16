import { Component, Input, inject, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../../models/section.model';
import { SectionBlock } from '../../../models/section-block.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SectionsService } from '../../../core/services/sections.service';
import { EditSectionFormComponent } from '../edit-section-form/edit-section-form.component';

@Component({
  selector: 'app-section-view',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    EditSectionFormComponent
  ],
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.scss']
})
export class SectionViewComponent {
  @Input() sections: Section[] = [];
  @Output() update = new EventEmitter<Section>();
  @Output() remove = new EventEmitter<number>();

  editingIndex: number | null = null;
  private cdr = inject(ChangeDetectorRef);

  startEdit(index: number): void {
    this.editingIndex = index;
    this.cdr.detectChanges();
  }

  cancelEdit(): void {
    this.editingIndex = null;
    this.cdr.detectChanges();
  }

  saveEdit(section: Section, pageName: string, event: { title: string; content: string }): void {
    const updatedSection = {
      ...section,
      pageName,
      title: event.title,
      content: event.content
    };

    this.update.emit(updatedSection);
    this.editingIndex = null;
    this.cdr.detectChanges();
  }

  deleteSection(id: number): void {
    this.remove.emit(id);
  }

  parseContent(content: string | SectionBlock[]): SectionBlock[] | null {
    if (!content) return null;
    if (Array.isArray(content)) return content;
    
    try {
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'object' && 'type' in parsed[0]) {
        return parsed as SectionBlock[];
      }
      return null;
    } catch {
      return null;
    }
  }
}
