import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { BlockType } from '../../../models/section-block.model';

@Component({
  selector: 'app-dynamic-section-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule
  ],
  templateUrl: './dynamic-section-form.component.html',
  styleUrls: ['./dynamic-section-form.component.scss']
})
export class DynamicSectionFormComponent {
  // Emit the section created event with the title and content
  
// Inject the FormBuilder service

// Create a form group with the following controls:
// - title: a required string control
// - contentBlocks: a required array control


  // Return the `contentBlocks` FormArray from the form (use get).
  // - Always cast to FormArray so callers get the right API (`push`, `removeAt`, `clear`).
  // - Keep this as a getter "contentBlocks" so templates and methods stay clean/readable.


  // Add one new "block" FormGroup into the `contentBlocks` FormArray.
  // - Accept `type: BlockType` and store it in the block as a required control.
  // - Create controls for all possible block fields up front:
  //   - `titleText` (used when type === 'title')
  //   - `textContent` + `isBold` (used when type === 'text')
  //   - `listItems` FormArray (used when type is a list)
  // - Apply validators based on the chosen type:
  //   - 'title' -> `titleText` required + `updateValueAndValidity()`
  //   - 'text'  -> `textContent` required + `updateValueAndValidity()`
  //   - list    -> ensure there is at least 1 required list item (call `addListItem(...)`)
  // - Finally push the block into `this.contentBlocks`.
  addBlock() {

  }

  // Remove a block at the given index from `contentBlocks`.
  // - Accept `index: number` (0-based).
  // - Use `removeAt` so Angular properly updates the FormArray and UI.
  removeBlock() {
    
  }

  // Add one required list item control to a list block.
  // - Accept the `listItemsArr` FormArray belonging to a block.
  // - Push a new FormControl('', Validators.required) so empty items are invalid.
  addListItem() {

  }

  // Remove one list item control from a list block.
  // - Accept the list FormArray + the item index (0-based).
  // - Use `removeAt` to keep FormArray state consistent.
  removeListItem() {

  }

  // Convenience helper: return the `listItems` FormArray for a specific block.
  // - Accept the block index in `contentBlocks`.
  // - Cast to FormArray so the template can iterate and call add/remove helpers.
  getListItems() {
    
  }

  // Convenience helper: strongly type a FormArray entry as a FormControl.
  // - Useful in templates when binding `[formControl]` for list items.
  // - Accept the FormArray and an index, return `formArray.at(index) as FormControl`.
  getFormControl() {
    
  }

  // Submit the form and emit `sectionCreated` when valid.
  // - Accept `formDirective: FormGroupDirective` so you can fully reset the Material/Angular form state.
  // - Guard with `if (this.form.valid)` (do not emit invalid data).
  // - Serialize content blocks to a string:
  //   const serializedContent = JSON.stringify(this.form.value.contentBlocks);
  // - Emit exactly:
  //   { title: value.title!, content: serializedContent }
  // - Reset after emit (important so the next section starts fresh):
  //   - formDirective.resetForm()
  //   - this.form.reset()
  //   - this.contentBlocks.clear()
  submit(): void {}
  
}