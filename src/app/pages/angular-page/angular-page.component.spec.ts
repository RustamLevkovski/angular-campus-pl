import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularPageComponent } from './angular-page.component';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { DynamicSectionFormComponent } from '../../shared/components/dynamic-section-form/dynamic-section-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Section } from '../../models/section.model';

describe('AngularPageComponent', () => {
  let component: AngularPageComponent;
  let fixture: ComponentFixture<AngularPageComponent>;
  let store: { [key: string]: string } = {};

  beforeEach(async () => {
    store = {};

    // Replace localStorage with a clean in-memory stub before component is created
    const localStorageStub: Storage = {
      getItem: (key: string) => store[key] ?? null,
      setItem: (key: string, value: string) => { store[key] = value; },
      removeItem: (key: string) => { delete store[key]; },
      clear: () => { store = {}; },
      key: (index: number) => Object.keys(store)[index] ?? null,
      length: 0,
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageStub, writable: true });

    await TestBed.configureTestingModule({
      imports: [AngularPageComponent, SectionViewComponent, DynamicSectionFormComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should merge extra sections from localStorage with initial sections', () => {
    const mockExtra: Section[] = [{ id: 99, title: 'Extra', content: 'C', pageName: 'angular' }];
    store['extra_sections_angular'] = JSON.stringify(mockExtra);

    const newFixture = TestBed.createComponent(AngularPageComponent);
    const newComponent = newFixture.componentInstance;
    newComponent.sections = [{ id: 1, title: 'Initial', content: 'C', pageName: 'angular' }];

    expect(newComponent.sections.length).toBe(2);
    expect(newComponent.sections[0].title).toBe('Initial');
    expect(newComponent.sections[1].title).toBe('Extra');
  });

  it('should add a new section and save to localStorage', () => {
    component.onSectionCreated({ title: 'New', content: 'Content' });

    expect(component.sections.length).toBe(1);
    expect(component.sections[0].title).toBe('New');
    expect(store['extra_sections_angular']).toBeDefined();
  });

  it('should update an existing extra section', () => {
    component.addSection('angular', 'Original', 'Content');
    const added = component.sections[0];

    component.updateSection({ ...added, title: 'Updated' });

    expect(component.sections[0].title).toBe('Updated');
  });

  it('should remove an extra section', () => {
    component.addSection('angular', 'To Remove', 'Content');
    const id = component.sections[0].id;

    component.removeSection(id);

    expect(component.sections.length).toBe(0);
  });
});
