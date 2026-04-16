import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-common-webdev-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './common-webdev-page.component.html',
  styleUrls: ['./common-webdev-page.component.scss']
})
export class CommonWebdevPageComponent {
  //1. Add @Input() decorator for sections property
  //2. Add type annotation for sections property
  //3. Initialize sections property with an empty array
}

