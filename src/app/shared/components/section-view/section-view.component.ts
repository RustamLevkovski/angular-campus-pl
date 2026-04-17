import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../../models/section.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-section-view',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './section-view.component.html',
  styleUrls: ['./section-view.component.scss']
})
export class SectionViewComponent {
  @Input() sections: Section[] = [];
  /*
   * - Create output props: update: the updated Section object when edits are saved.
   * - Create output props: remove: the ID (number) of the section to be deleted.
   */



  editingIndex: number | null = null;

  //Inject ChangeDetectorRef to manually trigger change detection


  // - Assign the provided `index` to the `editingIndex` variable.
  // - Call `this.cdr.detectChanges()` to force the view to update immediately.
  // - Method should apply index as a number. 
  startEdit(): void {

  }


  // - Reset `editingIndex` to `null`.
  // - Call `this.cdr.detectChanges()` to switch the UI back to view mode.
  cancelEdit(): void {

  }


  // - add parameters to this method to fix the template error:
  //   - section: Section
  //   - pageName: string
  //   - event: { title: string; content: string }
  //
  // Steps to implement:
  // - Create an `updatedSection` object. Use the spread operator to copy the original `section`,
  //   then overwrite `pageName`, `title` (from event.title), and `content` (from event.content).
  // - Emit the `updatedSection` using the `update` EventEmitter.
  // - Reset `editingIndex` to `null` to exit edit mode.
  // - Call `this.cdr.detectChanges()`.
  saveEdit(): void {

  }

  // - Emit the provided `id` using the `remove` EventEmitter.
  // Method should accept id as a number.
  deleteSection(): void {

  }

  // Task 5: Parse the section's content into structured blocks.
  // - If `content` is falsy, return `null`.
  // - If `content` is already an Array, return it directly.
  // - Wrap the following in a try-catch block:
  //   - Parse `content` using JSON.parse().
  //   - If the parsed result is an Array containing objects with a 'typeof' property is 'object', and type' in parsed[0] ) return it as `SectionBlock[]`.
  //   - Otherwise, return `null`.
  // - If the try-catch block catches an error, return `null`.
  // Method should accept content as a string or SectionBlock[] and return SectionBlock[] or null.
  parseContent() {

  }

  // Remove it. 
  asArray(content: any): any[] | null {
    return Array.isArray(content) ? content : null;
  }
}
