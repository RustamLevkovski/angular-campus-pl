import { TestBed } from '@angular/core/testing';
import { SectionViewComponent } from './section-view.component';
import { SectionsService } from '../../../core/services/sections.service';

describe('SectionViewComponent', () => {
  let mockSectionsService: any;

  beforeEach(async () => {
    mockSectionsService = {
      updateSection: vi.fn(),
      removeSection: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [SectionViewComponent],
      providers: [
        { provide: SectionsService, useValue: mockSectionsService }
      ]
    }).compileComponents();
  });

  it('creates with empty sections by default', () => {
    const fixture = TestBed.createComponent(SectionViewComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.sections).toEqual([]);
  });

  it('renders empty state when there are no sections', () => {
    const fixture = TestBed.createComponent(SectionViewComponent);
    fixture.componentInstance.sections = [];
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No content yet.');
    expect(fixture.nativeElement.querySelectorAll('mat-card').length).toBe(0);
  });

  it('renders a card per section when provided', () => {
    const fixture = TestBed.createComponent(SectionViewComponent);
    fixture.componentInstance.sections = [
      { id: 1, title: 'T1', content: 'C1' },
      { id: 2, title: 'T2', content: 'C2' },
    ];
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('mat-card');
    expect(cards.length).toBe(2);
    expect(cards[0]?.getAttribute('id')).toBe('section-1');
    expect(fixture.nativeElement.textContent).toContain('T1');
    expect(fixture.nativeElement.textContent).toContain('C2');
  });

  it('starts edit mode only for the targeted section', () => {
    const fixture = TestBed.createComponent(SectionViewComponent);
    fixture.componentInstance.sections = [
      { id: 1, title: 'T1', content: 'C1' },
      { id: 2, title: 'T2', content: 'C2' }
    ];
    fixture.detectChanges();

    // Click edit on first section
    fixture.componentInstance.startEdit(0);
    fixture.detectChanges();

    expect(fixture.componentInstance.editingIndex).toBe(0);
    
    let editForms = fixture.nativeElement.querySelectorAll('app-edit-section-form');
    expect(editForms.length).toBe(1);
    
    // Switch edit to second section
    fixture.componentInstance.startEdit(1);
    fixture.detectChanges();

    expect(fixture.componentInstance.editingIndex).toBe(1);
    editForms = fixture.nativeElement.querySelectorAll('app-edit-section-form');
    expect(editForms.length).toBe(1); // Still only one
  });

  it('starts edit mode for a section', () => {
    const fixture = TestBed.createComponent(SectionViewComponent);
    fixture.componentInstance.sections = [{ id: 1, title: 'T1', content: 'C1' }];
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button');
    const editBtn = Array.from(buttons).find((b: any) => b.textContent?.includes('Edit')) as HTMLButtonElement;
    editBtn.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.editingIndex).toBe(0);
    const editForm = fixture.nativeElement.querySelector('app-edit-section-form');
    expect(editForm).toBeTruthy();
  });

  it('cancels edit mode', () => {
    const fixture = TestBed.createComponent(SectionViewComponent);
    fixture.componentInstance.sections = [{ id: 1, title: 'T1', content: 'C1' }];
    fixture.detectChanges();

    fixture.componentInstance.startEdit(0);
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button');
    const cancelBtn = Array.from(buttons).find((b: any) => b.textContent?.includes('Cancel')) as HTMLButtonElement;
    cancelBtn.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.editingIndex).toBeNull();
  });

  it('saves edit and calls SectionsService updateSection', () => {
    const fixture = TestBed.createComponent(SectionViewComponent);
    fixture.componentInstance.sections = [{ id: 1, title: 'T1', content: 'C1', pageName: 'angular' }];
    fixture.detectChanges();

    fixture.componentInstance.startEdit(0);
    fixture.componentInstance.saveEdit(
      fixture.componentInstance.sections[0]!, 
      'angular', 
      { title: 'New T1', content: 'C1' }
    );

    expect(mockSectionsService.updateSection).toHaveBeenCalledWith(
      expect.objectContaining({ id: 1, title: 'New T1', content: 'C1', pageName: 'angular' })
    );
    expect(fixture.componentInstance.editingIndex).toBeNull();
  });

  it('removes section and calls SectionsService removeSection', () => {
    const fixture = TestBed.createComponent(SectionViewComponent);
    fixture.componentInstance.sections = [{ id: 1, title: 'T1', content: 'C1', pageName: 'Pg' }];
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button');
    const rmBtn = Array.from(buttons).find((b: any) => b.textContent?.includes('Remove')) as HTMLButtonElement;
    rmBtn.click();

    expect(mockSectionsService.removeSection).toHaveBeenCalledWith(1);
  });

  describe('parseContent', () => {
    it('returns null for falsy content', () => {
      const fixture = TestBed.createComponent(SectionViewComponent);
      expect(fixture.componentInstance.parseContent('')).toBeNull();
    });

    it('returns null for invalid JSON', () => {
      const fixture = TestBed.createComponent(SectionViewComponent);
      expect(fixture.componentInstance.parseContent('{"invalid": json')).toBeNull();
    });

    it('returns null for non-array JSON', () => {
      const fixture = TestBed.createComponent(SectionViewComponent);
      expect(fixture.componentInstance.parseContent('{"type": "text"}')).toBeNull();
    });

    it('returns null for array without type attribute', () => {
      const fixture = TestBed.createComponent(SectionViewComponent);
      expect(fixture.componentInstance.parseContent('[{"notType": "text"}]')).toBeNull();
    });

    it('returns parsed blocks for valid block JSON array', () => {
      const fixture = TestBed.createComponent(SectionViewComponent);
      const val = '[{"type": "title", "titleText": "T1"}]';
      const parsed = fixture.componentInstance.parseContent(val);
      expect(parsed).toEqual([{ type: 'title', titleText: 'T1' }]);
    });
  });
});

