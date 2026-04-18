import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicSectionFormComponent } from '../../shared/components/dynamic-section-form/dynamic-section-form.component';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { Section } from '../../models/section.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-angular-page',
  standalone: true,
  imports: [CommonModule, DynamicSectionFormComponent, SectionViewComponent, MatButtonModule],
  templateUrl: './angular-page.component.html',
  styleUrls: ['./angular-page.component.scss']
})
export class AngularPageComponent implements OnInit {
  // Steps to implement:
  // - Inject the `MenuService` and `SectionsService` using the `inject(...)` function.
  // - Mark them as `private readonly` so only this component can use them and the reference cannot be reassigned.


  // Steps to implement:
  // Replace existing logic, are related to the sections input: with the following: 
  // create a sections$ property of type Observable<Section[]> to store the sections for this page.
  @Input() set sections(value: Section[]) {
    this._initialSections = value;
    this.combineSections();
  }
  get sections(): Section[] {
    return this._allSections;
  }

  private _initialSections: Section[] = [];
  private _allSections: Section[] = [];
  private _extraSections: Section[] = [];
  private lastId = 0;

  showForm = false;

  ngOnInit(): void {
    // 1. Steps to implement:
    // create a pageName property of type string to store the name of the page - set it to 'angular'.
   
    // 2. Steps to implement:
    // use the menuService to set the current page to the pageName.
  
  
// 3. Steps to implement:
// use the sectionsService to ensure the initial sections for the page are loaded.
// add parameters to this method:
//   - pageName: string
// second parameter is an array of sections with mock data:
// { title: 'Components & Templates', content: 'Learn how to build components, templates, and bindings in Angular.' },
// { title: 'Dependency Injection', content: 'Understand providers, injectors, and how Angular DI works.' }


// 4. Steps to implement:
// use the sectionsService method getSectionsForPage with the pageName to get the sections and assign it to the sections$ property.
 
  }

  onSectionCreated(event: { title: string; content: string }): void {
    // Steps to implement:
    // use the sectionsService method addSection with the pageName and the event to add the section.
    this.addSection('angular', event.title, event.content); 
    this.showForm = false;
  }

  // move it to the sectionsService
  addSection(pageName: string, title: string, content: string): void {
    const id = this.generateId();
    const newSection: Section = { id, pageName, title, content };
    this._extraSections.push(newSection);
    this.saveExtraSections();
  }

    // move it to the sectionsService
  private generateId(): number {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    const idString = `${timestamp.toString().slice(-6)}${random}`;
    let id = Number(idString);
    
    if (id <= this.lastId) {
       id = this.lastId + 1;
    }
    this.lastId = id;
    return id;
  }

    // move it to the sectionsService
  updateSection(section: Section): void {
    const index = this._extraSections.findIndex(s => s.id === section.id);
    if (index !== -1) {
      this._extraSections[index] = section;
      this.saveExtraSections();
    }
  }

    // move it to the sectionsService
  removeSection(id: number): void {
    this._extraSections = this._extraSections.filter(s => s.id !== id);
    this.saveExtraSections();
  }

  // remove it
  private saveExtraSections(): void {
    localStorage.setItem('extra_sections_angular', JSON.stringify(this._extraSections));
    this.combineSections();
  }

  // remove it
  private combineSections(): void {
    this._allSections = [...this._initialSections, ...this._extraSections];
  }
}
