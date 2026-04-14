import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Lesson 4 Disable Services and Routes. import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {}

