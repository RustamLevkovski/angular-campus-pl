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
  //1. Add @Input() decorator for sections property
  //2. Add type annotation for sections property
  //3. Initialize sections property with an empty array


  // create editingIndex as number or null and initialize as null


  asArray(content: any): any[] | null {
    return Array.isArray(content) ? content : null;
  }
}

