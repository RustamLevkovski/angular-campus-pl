import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '../../../models/section.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditSectionFormComponent } from '../edit-section-form/edit-section-form.component';


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

  editingIndex: number | null = null;

  asArray(content: any): any[] | null {
    return Array.isArray(content) ? content : null;
  }
}

