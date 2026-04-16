import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentLayoutComponent } from './content-layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Section } from '../../models/section.model';

describe('ContentLayoutComponent', () => {
  let component: ContentLayoutComponent;
  let fixture: ComponentFixture<ContentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentLayoutComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should filter sections by pageName in getSectionsByPage', () => {
    const mockSections: Section[] = [
      { id: 1, title: 'A_S1', content: 'C1', pageName: 'angular' },
      { id: 2, title: 'JS_S1', content: 'C2', pageName: 'javascript' },
      { id: 3, title: 'A_S2', content: 'C3', pageName: 'angular' }
    ];
    
    const angularRes = component.getSectionsByPage(mockSections, 'angular');
    expect(angularRes.length).toBe(2);
    expect(angularRes[0].title).toBe('A_S1');
    expect(angularRes[1].title).toBe('A_S2');
  });

  it('should parse content blocks from the sections$ observable correctly', async () => {
    fixture.detectChanges();
    const sections = await new Promise<Section[]>(resolve => {
        component.sections$.subscribe(s => resolve(s));
    });
    
    expect(sections.length).toBeGreaterThan(0);
    const firstS = sections[0];
    if (typeof firstS.content !== 'string') {
      expect(Array.isArray(firstS.content)).toBe(true);
    }
  });
});
