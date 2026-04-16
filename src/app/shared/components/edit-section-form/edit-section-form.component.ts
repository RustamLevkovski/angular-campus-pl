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

  ngOnInit(): void {
    if (this.section) {
      this.form.patchValue({ title: this.section.title });
      this.initBlocks();
    }
  }

  private initBlocks() {
    let blocks = [];
    try {
      if (typeof this.section.content === 'string') {
        blocks = JSON.parse(this.section.content);
      } else if (Array.isArray(this.section.content)) {
        blocks = this.section.content;
      }
    } catch {
       // fallback for old string-only content
       blocks = [{ type: 'text', textContent: this.section.content }];
    }

    if (Array.isArray(blocks)) {
        blocks.forEach(b => this.addBlock(b.type, b));
    }
  }

  addBlock(type: BlockType, data: any = {}) {
    const block = this.fb.group({
      type: [type, Validators.required],
      titleText: [data.titleText || ''],
      isBold: [data.isBold || false],
      textContent: [data.textContent || ''],
      listItems: this.fb.array((data.listItems || []).map((item: string) => new FormControl(item, Validators.required)))
    });

    if (type === 'title') {
      block.get('titleText')?.setValidators(Validators.required);
    } else if (type === 'text') {
      block.get('textContent')?.setValidators(Validators.required);
    }
    
    block.get('titleText')?.updateValueAndValidity();
    block.get('textContent')?.updateValueAndValidity();

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

  submit(formDirective: FormGroupDirective): void {
    if (this.form.valid) {
      const value = this.form.value;
      const serializedContent = JSON.stringify(value.contentBlocks);
      
      this.save.emit({
        title: value.title!,
        content: serializedContent
      });
      formDirective.resetForm();
      this.form.reset();
      this.contentBlocks.clear();
    }
  }

  cancelEdit() {
    this.cancel.emit();
  }
}
