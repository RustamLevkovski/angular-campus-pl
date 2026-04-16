import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-dynamic-section-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule
  ],
  templateUrl: './dynamic-section-form.component.html',
  styleUrls: ['./dynamic-section-form.component.scss']
})
export class DynamicSectionFormComponent {


}
