import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../core/services/menu.service';
import { of } from 'rxjs';
import type { SectionNavItem } from '../../../core/services/menu.service';

@Component({
  selector: 'app-left-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent {
  // Lesson 4 Disable Services and Routes. private menuService = inject(MenuService);
  // Lesson 4 Disable Services and Routes. items$ = this.menuService.sections$;
  items$ = of([] as SectionNavItem[]);
}


