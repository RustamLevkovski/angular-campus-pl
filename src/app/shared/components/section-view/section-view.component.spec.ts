import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionViewComponent } from './section-view.component';
import { Section } from '../../../models/section.model';

describe('SectionViewComponent', () => {
  let component: SectionViewComponent;
  let fixture: ComponentFixture<SectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionViewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should toggle asArray correctly', () => {
    expect(component.asArray('test')).toBeNull();
    expect(component.asArray(['test'])).toEqual(['test']);
  });

  it('should render sections when provided', () => {
    const mockSections: Section[] = [
      { id: 1, title: 'Test Section', content: 'Raw content' }
    ];
    component.sections = mockSections;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent).toContain('Test Section');
    expect(compiled.querySelector('mat-card-content')?.textContent).toContain('Raw content');
  });
});
