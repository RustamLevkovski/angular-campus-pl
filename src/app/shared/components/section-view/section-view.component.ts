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
  // HINTS / INSTRUCTIONS (SectionViewComponent)
  //
  // Goal: display a list of sections with two modes per item:
  // - View mode: render the section title + parsed content blocks (if JSON) and show Edit/Remove actions
  // - Edit mode: swap the content for <app-edit-section-form> and emit updates back to the parent
  //
  // Inputs/outputs:
  // - `@Input() sections`: the list to render (each Section must have a stable `id`)
  // - `@Output() update`: emits the full updated Section object after saving edits
  // - `@Output() remove`: emits the `id` of the section to delete
  @Input() sections: Section[] = [];
  @Output() update = new EventEmitter<Section>();
  @Output() remove = new EventEmitter<number>();

  editingIndex: number | null = null;
  private cdr = inject(ChangeDetectorRef);

  // Enter edit mode for the section at `index`.
  // - Store the currently edited index in `editingIndex`.
  // - Call detectChanges() to ensure the edit form mounts immediately (useful with OnPush/standalone patterns).
  startEdit(index: number): void {
    this.editingIndex = index;
    this.cdr.detectChanges();
  }

  // Exit edit mode without saving.
  // - Reset `editingIndex` back to null.
  // - Trigger change detection so the view mode re-renders.
  cancelEdit(): void {
    this.editingIndex = null;
    this.cdr.detectChanges();
  }

  // Save changes from the edit form and emit an updated Section.
  // - Accept:
  //   - `section`: the original section object
  //   - `pageName`: page name to keep/override (parent decides what to pass)
  //   - `event`: { title, content } emitted by EditSectionFormComponent
  // - Build `updatedSection` immutably using spread (`{ ...section, ...updates }`).
  // - Emit `update` with the full Section so the parent can persist it (e.g., localStorage/service).
  // - Exit edit mode afterwards.
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

  // Request deletion of a section by id.
  // - Emit `remove` so the parent can delete it from the source of truth.
  deleteSection(id: number): void {
    this.remove.emit(id);
  }

  // Parse a section's `content` into structured blocks (if possible).
  // - Accept `content` as either:
  //   - a JSON string (most common persisted format), OR
  //   - an already-parsed SectionBlock[] array
  // - Return:
  //   - SectionBlock[] when the content looks like a valid block array
  //   - null when it's empty, not JSON, or not in the expected block shape
  // - The template uses this to decide whether to render blocks or fallback to plain text.
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
