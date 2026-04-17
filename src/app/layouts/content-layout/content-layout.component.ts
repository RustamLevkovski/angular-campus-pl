import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopNavbarComponent } from '../../shared/components/top-navbar/top-navbar.component';
import { LeftSideMenuComponent } from '../../shared/components/left-side-menu/left-side-menu.component';

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [TopNavbarComponent, LeftSideMenuComponent, RouterOutlet],
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent {

}
