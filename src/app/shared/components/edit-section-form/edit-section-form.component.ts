import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { Section } from '../../../models/section.model';
import { BlockType } from '../../../models/section-block.model';

@Component({
  selector: 'app-edit-section-form',
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
  templateUrl: './edit-section-form.component.html',
  styleUrls: ['./edit-section-form.component.scss']
})
export class EditSectionFormComponent implements OnInit {
  
  @Input() section!: Section;
    
  // Emit the save event with the title and content
  // Emit the cancel event when the user exits without saving


  //Inject the FormBuilder service


  // Create a form group with the following controls:
  // - title: a required string control
  // - contentBlocks: a required array control

  // Return the `contentBlocks` FormArray from the form.
  // - Cast to FormArray so you can call `push`, `removeAt`, and `clear`.
  // - Keep this as a getter so template bindings stay clean.



  ngOnInit(): void {
    // check if the section is defined

      // patch the title of the form
      
      // initialize the blocks
    
    
  }

 // create a variable blocks and assign it as an empty array
 // try to parse the section.content as a JSON string
 // if it is an array, assign it to blocks
 // if it is a string, parse it as a JSON string and assign it to blocks
 // if it is not a string or array, assign it to blocks as a single text block
 // if the parsing fails, assign it to blocks as a single text block
 // if the parsing succeeds, assign it to blocks
 // if the parsing succeeds, assign it to blocks
  private initBlocks() {

  }

  // Add one block into the form, optionally pre-filled with existing data.
  // - Accept:
  //   - `type: BlockType` (required)
  //   - `data: any` (optional) containing any of:
  //     - titleText, isBold, textContent, listItems
  // - Build a FormGroup containing all fields so the template can switch by type.
  // listItems is a FormArray of required FormControls.
  // Use type, titleText, isBold, textContent, listItems to create the block
  // - For list blocks, create `listItems` as a FormArray of required FormControls.
  // - Apply validators based on type:
  //   - 'title' -> `titleText` required
  //   - 'text'  -> `textContent` required
  // - Always call `updateValueAndValidity()` after changing validators.
  // - Finally push into `this.contentBlocks`.
  addBlock() {

  }

  // Remove a block at the given index.
  // - Index is 0-based.
  // - Uses FormArray.removeAt so Angular updates bindings correctly.
  removeBlock() {
 
  }

  // Add a new required list item to a list block.
  // - Accept the list block's `listItems` FormArray.
  // - Push FormControl('', Validators.required) so empty items keep the form invalid.
  addListItem() {
   
  }

  // Remove a list item at a given index.
  // - Accept the list FormArray and the item index 
  removeListItem() {
   
  }

  // Return the `listItems` FormArray for the block at `blockIndex`.
  // - Used by the template to loop items and to call add/remove helpers.
  // Accept the block index, return the `listItems` FormArray for that block.
  getListItems() {
    
  }

  // Return a FormArray entry typed as a FormControl.
  // - Helpful for `[formControl]` bindings in the template.
  // - Accept the FormArray and an index, return `formArray.at(index) as FormControl`.
  getFormControl() {
   
  }

  // Submit the edit form and emit `save` if valid.
  // - Accept `formDirective: FormGroupDirective` so you can fully reset the Material/Angular form state.
  // - Guard with `if (this.form.valid)` so you don't persist incomplete blocks.
  // - Serialize blocks: from value.contentBlocks to a string

  // - Emit title and content via save event
 
  // - Reset the UI + internal state:
  // reset formDirective, form and clear contentBlocks
  submit(): void {

  }

  // Cancel editing without saving.
  // - Emit `cancel` so the parent can switch the UI out of edit mode.
  cancelEdit() {
   
  }
}
