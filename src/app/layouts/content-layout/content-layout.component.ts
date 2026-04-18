import { Component,  } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import mockData from '../../../../public/mock-data.json';
import { Section } from '../../models/section.model';
import { CommonModule } from '@angular/common';
import { TopNavbarComponent } from '../../shared/components/top-navbar/top-navbar.component';
import { AngularPageComponent } from '../../pages/angular-page/angular-page.component';
import { JsPageComponent } from '../../pages/js-page/js-page.component';
import { CommonWebdevPageComponent } from '../../pages/common-webdev-page/common-webdev-page.component';
import { LeftSideMenuComponent } from '../../shared/components/left-side-menu/left-side-menu.component';


@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [CommonModule, TopNavbarComponent, LeftSideMenuComponent,  AngularPageComponent, JsPageComponent, CommonWebdevPageComponent],
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {
  sections$: Observable<Section[]> = of(mockData as any[]).pipe(
    map(sections => sections.map(s => ({
      ...s,
      content: typeof s.content === 'string' ? JSON.parse(s.content) : s.content
    })))
  );

  getSectionsByPage(sections: Section[], pageName: string): Section[] {
    return sections.filter(s => s.pageName === pageName);
  }
}
