import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionViewComponent } from './section-view.component';
import { SectionsService } from '../../../core/services/sections.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SectionViewComponent', () => {
  let component: SectionViewComponent;
  let fixture: ComponentFixture<SectionViewComponent>;
  let mockSectionsService: any;

  beforeEach(async () => {
    mockSectionsService = {
      updateSection: vi.fn(),
      removeSection: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [SectionViewComponent, NoopAnimationsModule],
      providers: [
        { provide: SectionsService, useValue: mockSectionsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start edit mode', () => {
    component.startEdit(1);
    expect(component.editingIndex).toBe(1);
  });

  it('should cancel edit mode', () => {
    component.editingIndex = 1;
    component.cancelEdit();
    expect(component.editingIndex).toBeNull();
  });

  it('should save edit and call updateSection', () => {
    const section = { id: 1, title: 'Old', content: 'C' };
    component.editingIndex = 0;
    component.saveEdit(section, 'angular', { title: 'New', content: 'NewC' });
    expect(mockSectionsService.updateSection).toHaveBeenCalledWith({ id: 1, title: 'New', content: 'NewC', pageName: 'angular' });
    expect(component.editingIndex).toBeNull();
  });

  it('should delete section', () => {
    component.deleteSection(5);
    expect(mockSectionsService.removeSection).toHaveBeenCalledWith(5);
  });

  it('should parse content correctly', () => {
    expect(component.parseContent('')).toBeNull();
    const arr = [{ type: 'title', titleText: 'T' }];
    expect(component.parseContent(arr as any)).toBe(arr);
    expect(component.parseContent('[{"type":"title","titleText":"T"}]')).toEqual(arr);
    expect(component.parseContent('just string')).toBeNull();
  });
});
