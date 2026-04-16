import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { MatButtonModule } from '@angular/material/button';
import { Section } from '../../models/section.model';


@Component({
  selector: 'app-angular-page',
  standalone: true,
  imports: [CommonModule, SectionViewComponent, MatButtonModule,],
  templateUrl: './angular-page.component.html',
  styleUrls: ['./angular-page.component.scss']
})
export class AngularPageComponent {
  // replace plain @Input() sections with a setter/getter pair
  // in the setter: assign the incoming value to _initialSections
  // then call combineSections() so the template always reflects both data sources
  // the getter should return _allSections
  @Input() sections: Section[] = [];

  // declare three private Section[] arrays:
  // _initialSections — sections received from the parent via @Input
  // _allSections     — the merged result that is rendered in the template
  // _extraSections   — user-created sections persisted in localStorage
  // declare a private lastId number (default 0) to prevent ID collisions


  showForm = false;

  ngOnInit(): void {
    // call loadExtraSections() so persisted data is ready before any @Input values arrive

  }

  // read the value stored in const 'stored' under key 'extra_sections_angular' from localStorage
  // guard against null (use if)  — localStorage.getItem() returns null when the key does not exist
  // parse the JSON string back into an array and assign it to _extraSections

  private loadExtraSections(): void {

  }

  // merge _initialSections and _extraSections into a single new array
  // use the spread operator [...a, ...b] — do NOT mutate the existing arrays
  // assign the result to _allSections so the template receives a new array reference
  private combineSections(): void {

  }

  // serialize _extraSections to a JSON string using JSON.stringify()
  // save the string to localStorage under key 'extra_sections_angular'
  // call combineSections() afterwards to keep _allSections in sync
  private saveExtraSections(): void {

  }

  // accept an event object with shape { title: string; content: string }
  // call addSection(), passing 'angular' as pageName and event.title / event.content as arguments
  // set showForm to false to hide the form after the section is created
  // bind in the template: (sectionCreated)="onSectionCreated($event)"
  onSectionCreated(): void {

  }

  // accept pageName, title, and content as string arguments with type annotations
  // generate a unique numeric id by calling generateId()
  // build a Section object literal using id, pageName, title, and content
  // push the new section into _extraSections
  // call saveExtraSections() to persist the change and re-merge
  addSection(): void {

  }

  // accept a full Section object (already updated) as the argument
  // find its index in _extraSections by matching section.id using findIndex()
  // if found (index !== -1), replace the element at that index with the updated section
  // call saveExtraSections() to persist and re-merge
  updateSection(): void {

  }


  // accept the numeric id of the section to remove
  // use Array.filter() to build a new array that excludes the section with the matching id
  // assign the filtered result back to _extraSections
  // call saveExtraSections() to persist and re-merge
  removeSection(): void {

  }

  // generate unique id for section
  // use timestamp, based on current date and time
  // and random number, based on Math.random() * 1000 and floor 
  // and idString, based on last 6 digits of  timestamp and random number
  // and id, based on idString (ensure id is Number)
  // implement logic for checking if id less or equal to lastId, if so, increment id by 1
  // and update lastId to id. In the end - return id. 

  private generateId() { }

}
