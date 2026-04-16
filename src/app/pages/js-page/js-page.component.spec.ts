import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsPageComponent } from './js-page.component';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';
import { DynamicSectionFormComponent } from '../../shared/components/dynamic-section-form/dynamic-section-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('JsPageComponent', () => {
  let component: JsPageComponent;
  let fixture: ComponentFixture<JsPageComponent>;
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
      imports: [JsPageComponent, SectionViewComponent, DynamicSectionFormComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(JsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new section for javascript and save to localStorage', () => {
    component.onSectionCreated({ title: 'New JS', content: 'Content' });

    expect(component.sections.length).toBe(1);
    expect(component.sections[0].title).toBe('New JS');
    expect(store['extra_sections_javascript']).toBeDefined();
  });

  it('should remove an extra section from javascript', () => {
    component.addSection('javascript', 'To Remove JS', 'Content');
    const id = component.sections[0].id;

    component.removeSection(id);

    expect(component.sections.length).toBe(0);
  });
});
