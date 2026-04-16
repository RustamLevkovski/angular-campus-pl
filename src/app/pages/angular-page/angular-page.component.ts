import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-angular-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './angular-page.component.html',
  styleUrls: ['./angular-page.component.scss']
})
export class AngularPageComponent {
  //1. Add @Input() decorator for sections property
  //2. Add type annotation for sections property
  //3. Initialize sections property with an empty array


}
