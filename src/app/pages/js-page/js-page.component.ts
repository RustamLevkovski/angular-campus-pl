import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { Section } from '../../models/section.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-js-page',
  standalone: true,
  imports: [CommonModule, SectionViewComponent, MatButtonModule],
  templateUrl: './js-page.component.html',
  styleUrls: ['./js-page.component.scss']
})
export class JsPageComponent {
  @Input() sections: Section[] = [];
  showForm = false;
}

