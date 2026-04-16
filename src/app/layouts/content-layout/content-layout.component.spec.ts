import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentLayoutComponent } from './content-layout.component';
import { provideHttpClient } from '@angular/common/http';
import { of, firstValueFrom } from 'rxjs';
import { Section } from '../../models/section.model';

describe('ContentLayoutComponent', () => {
  let component: ContentLayoutComponent;
  let fixture: ComponentFixture<ContentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentLayoutComponent],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter sections by page name', () => {
    const mockSections: Section[] = [
      { id: 1, pageName: 'angular', title: 'A', content: [] },
      { id: 2, pageName: 'javascript', title: 'B', content: [] }
    ];
    const filtered = component.getSectionsByPage(mockSections, 'angular');
    expect(filtered.length).toBe(1);
    expect(filtered[0].pageName).toBe('angular');
  });

  it('should have sections$ observable', async () => {
    const sections = await firstValueFrom(component.sections$);
    expect(Array.isArray(sections)).toBe(true);
  });
});
