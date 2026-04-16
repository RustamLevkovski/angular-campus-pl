import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { MatButtonModule } from '@angular/material/button';
import { Section } from '../../models/section.model';

@Component({
  selector: 'app-angular-page',
  standalone: true,
  imports: [CommonModule, SectionViewComponent, MatButtonModule],
  templateUrl: './angular-page.component.html',
  styleUrls: ['./angular-page.component.scss']
})
export class AngularPageComponent {
  @Input() sections: Section[] = [];
  showForm = false;
}
