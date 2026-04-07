import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { Section } from '../../../models/section.model';
import { BlockType, SectionBlock } from '../../../models/section-block.model';

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
  @Input({ required: true }) section!: Section;
  @Output() save = new EventEmitter<{ title: string; content: string }>();
  @Output() cancel = new EventEmitter<void>();

  private fb = inject(FormBuilder);

  form = this.fb.group({
    title: ['', Validators.required],
    contentBlocks: this.fb.array([])
  });

  get contentBlocks() {
    return this.form.get('contentBlocks') as FormArray;
  }

  ngOnInit() {
    if (this.section) {
      this.form.patchValue({
        title: this.section.title
      });

      try {
        const parsed = JSON.parse(this.section.content);
        if (Array.isArray(parsed)) {
          // If it's an array, we assume it's a structural array. 
          // Even if empty, we don't want the text fallback.
          const blocks = parsed as SectionBlock[];
          blocks.forEach(block => this.loadBlock(block));
        } else {
          // Fallback for non-array JSON
          this.loadBlock({ type: 'text', textContent: this.section.content });
        }
      } catch {
        // Fallback for plain text
        this.loadBlock({ type: 'text', textContent: this.section.content });
      }
    }
  }

  loadBlock(blockData: SectionBlock) {
    const block = this.fb.group({
      type: [blockData.type, Validators.required],
      titleText: [blockData.titleText || ''],
      isBold: [blockData.isBold || false],
      textContent: [blockData.textContent || ''],
      listItems: this.fb.array([])
    });

    if (blockData.type === 'title') {
      block.get('titleText')?.setValidators(Validators.required);
      block.get('titleText')?.updateValueAndValidity();
    } else if (blockData.type === 'text') {
      block.get('textContent')?.setValidators(Validators.required);
      block.get('textContent')?.updateValueAndValidity();
    } 

    if ((blockData.type === 'ordered-list' || blockData.type === 'unordered-list') && blockData.listItems) {
      const listArray = block.get('listItems') as FormArray;
      blockData.listItems.forEach(item => {
        listArray.push(new FormControl(item, Validators.required));
      });
      // Ensure at least one item
      if (listArray.length === 0) {
        listArray.push(new FormControl('', Validators.required));
      }
    }

    this.contentBlocks.push(block);
  }

  addBlock(type: BlockType) {
    const block = this.fb.group({
      type: [type, Validators.required],
      titleText: [''],
      isBold: [false],
      textContent: [''],
      listItems: this.fb.array([])
    });

    if (type === 'title') {
      block.get('titleText')?.setValidators(Validators.required);
      block.get('titleText')?.updateValueAndValidity();
    } else if (type === 'text') {
      block.get('textContent')?.setValidators(Validators.required);
      block.get('textContent')?.updateValueAndValidity();
    } else if (type === 'ordered-list' || type === 'unordered-list') {
      this.addListItem(block.get('listItems') as FormArray);
    }

    this.contentBlocks.push(block);
  }

  removeBlock(index: number) {
    this.contentBlocks.removeAt(index);
  }

  addListItem(listItemsArr: FormArray) {
    listItemsArr.push(new FormControl('', Validators.required));
  }

  removeListItem(listItemsArr: FormArray, index: number) {
    listItemsArr.removeAt(index);
  }

  getListItems(blockIndex: number): FormArray {
    return this.contentBlocks.at(blockIndex).get('listItems') as FormArray;
  }

  getFormControl(formArray: FormArray, index: number): FormControl {
    return formArray.at(index) as FormControl;
  }

  submit(): void {
    if (this.form.valid) {
      const value = this.form.value;
      const serializedContent = JSON.stringify(value.contentBlocks);

      this.save.emit({
        title: value.title as string,
        content: serializedContent
      });
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
