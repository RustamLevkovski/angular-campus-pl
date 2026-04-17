import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
  links = [
    { label: 'Angular', url: '/angular' },
    { label: 'JavaScript', url: '/javascript' },
    { label: 'Web Development', url: '/webdev' }
  ];

}

