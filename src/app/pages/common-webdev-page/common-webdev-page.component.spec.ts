import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonWebdevPageComponent } from './common-webdev-page.component';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { DynamicSectionFormComponent } from '../../shared/components/dynamic-section-form/dynamic-section-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CommonWebdevPageComponent', () => {
  let component: CommonWebdevPageComponent;
  let fixture: ComponentFixture<CommonWebdevPageComponent>;
  let store: { [key: string]: string } = {};

  beforeEach(async () => {
    store = {};

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
      imports: [CommonWebdevPageComponent, SectionViewComponent, DynamicSectionFormComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonWebdevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new section for webdev and save to localStorage', () => {
    component.onSectionCreated({ title: 'New Webdev', content: 'Content' });

    expect(component.sections.length).toBe(1);
    expect(component.sections[0].title).toBe('New Webdev');
    expect(store['extra_sections_webdev']).toBeDefined();
  });

  it('should remove an extra section from webdev', () => {
    component.addSection('webdev', 'To Remove WD', 'Content');
    const id = component.sections[0].id;

    component.removeSection(id);

    expect(component.sections.length).toBe(0);
  });
});
