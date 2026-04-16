import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-js-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './js-page.component.html',
  styleUrls: ['./js-page.component.scss']
})
export class JsPageComponent {
  //1. Add @Input() decorator for sections property
  //2. Add type annotation for sections property
  //3. Initialize sections property with an empty array
}

