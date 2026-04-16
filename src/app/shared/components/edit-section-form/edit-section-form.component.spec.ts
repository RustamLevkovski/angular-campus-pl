import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSectionFormComponent } from './edit-section-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroupDirective } from '@angular/forms';
import { Section } from '../../../models/section.model';

describe('EditSectionFormComponent', () => {
  let component: EditSectionFormComponent;
  let fixture: ComponentFixture<EditSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSectionFormComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSectionFormComponent);
    component = fixture.componentInstance;
  });

  const mockContent = JSON.stringify([{ type: 'text', textContent: 'Initial' }]);
  const mockSection: Section = { id: 1, title: 'Title', content: mockContent };

  it('should create', () => {
    component.section = mockSection;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should populate its form from input section (JSON array)', () => {
    component.section = mockSection;
    fixture.detectChanges();
    
    expect(component.form.value.title).toBe('Title');
    expect(component.contentBlocks.length).toBe(1);
    expect(component.contentBlocks.at(0).get('textContent')?.value).toBe('Initial');
  });

  it('should handle legacy string content by creating a default text block', () => {
    component.section = { id: 2, title: 'Old', content: 'Plain Text' };
    fixture.detectChanges();
    
    expect(component.contentBlocks.length).toBe(1);
    expect(component.contentBlocks.at(0).get('textContent')?.value).toBe('Plain Text');
    expect(component.contentBlocks.at(0).get('type')?.value).toBe('text');
  });

  it('should emit save event with updated data', () => {
    const mockFormDirective = { resetForm: vi.fn() } as any;
    vi.spyOn(component.save, 'emit');
    
    component.section = mockSection;
    fixture.detectChanges();
    
    component.form.patchValue({ title: 'Modified' });
    component.contentBlocks.at(0).get('textContent')?.setValue('Modified Content');
    
    component.submit(mockFormDirective);
    
    expect(component.save.emit).toHaveBeenCalledWith(expect.objectContaining({
      title: 'Modified',
      content: expect.stringMatching('Modified Content')
    }));
  });

  it('should emit cancel event', () => {
    vi.spyOn(component.cancel, 'emit');
    component.cancelEdit();
    expect(component.cancel.emit).toHaveBeenCalled();
  });
});
