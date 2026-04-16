import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { Section } from '../../models/section.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-common-webdev-page',
  standalone: true,
  imports: [CommonModule, SectionViewComponent, MatButtonModule],
  templateUrl: './common-webdev-page.component.html',
  styleUrls: ['./common-webdev-page.component.scss']
})
export class CommonWebdevPageComponent {
  @Input() sections: Section[] = [];
  showForm = false;
}

