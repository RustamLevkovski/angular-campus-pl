import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-left-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent {
  private menuService = inject(MenuService);
  items$ = this.menuService.sections$;
}


