import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-left-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss']
})
export class LeftSideMenuComponent {
  // Inject menuService

  // Create items$ prop. Assign sections$  from menuService
 
}

