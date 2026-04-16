import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { MatButtonModule } from '@angular/material/button';
import { Section } from '../../models/section.model';
import { DynamicSectionFormComponent } from '../../shared/components/dynamic-section-form/dynamic-section-form.component';

@Component({
  selector: 'app-angular-page',
  standalone: true,
  imports: [CommonModule, SectionViewComponent, MatButtonModule, DynamicSectionFormComponent],
  templateUrl: './angular-page.component.html',
  styleUrls: ['./angular-page.component.scss']
})
export class AngularPageComponent {
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

  constructor() {
    this.loadExtraSections();
  }

  private loadExtraSections(): void {
    const stored = localStorage.getItem('extra_sections_angular');
    if (stored) {
      this._extraSections = JSON.parse(stored);
    }
  }

  private combineSections(): void {
    this._allSections = [...this._initialSections, ...this._extraSections];
  }

  private saveExtraSections(): void {
    localStorage.setItem('extra_sections_angular', JSON.stringify(this._extraSections));
    this.combineSections();
  }

  onSectionCreated(event: { title: string; content: string }): void {
    this.addSection('angular', event.title, event.content); 
    this.showForm = false;
  }

  addSection(pageName: string, title: string, content: string): void {
    const id = this.generateId();
    const newSection: Section = { id, pageName, title, content };
    this._extraSections.push(newSection);
    this.saveExtraSections();
  }

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

  updateSection(section: Section): void {
    const index = this._extraSections.findIndex(s => s.id === section.id);
    if (index !== -1) {
      this._extraSections[index] = section;
      this.saveExtraSections();
    }
  }

  removeSection(id: number): void {
    this._extraSections = this._extraSections.filter(s => s.id !== id);
    this.saveExtraSections();
  }
}
