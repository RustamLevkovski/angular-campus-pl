import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionViewComponent } from './section-view.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EditSectionFormComponent } from '../edit-section-form/edit-section-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Section } from '../../../models/section.model';

describe('SectionViewComponent', () => {
  let component: SectionViewComponent;
  let fixture: ComponentFixture<SectionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionViewComponent, MatCardModule, MatButtonModule, EditSectionFormComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should parse JSON string content into blocks', () => {
    const jsonStr = JSON.stringify([{ type: 'text', textContent: 'Hello' }]);
    const parsed = component.parseContent(jsonStr);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed![0].textContent).toBe('Hello');
  });

  it('should return null for non-JSON content or invalid formats', () => {
    const plainText = 'Just some text';
    expect(component.parseContent(plainText)).toBeNull();
  });

  it('should start and cancel edit mode correctly', () => {
    component.startEdit(0);
    expect(component.editingIndex).toBe(0);
    
    component.cancelEdit();
    expect(component.editingIndex).toBeNull();
  });

  it('should emit update event on saveEdit', () => {
    const mockSection: Section = { id: 1, title: 'T', content: 'C' };
    vi.spyOn(component.update, 'emit');
    
    component.saveEdit(mockSection, 'angular', { title: 'New T', content: 'New C' });
    
    expect(component.update.emit).toHaveBeenCalledWith(expect.objectContaining({
      id: 1,
      title: 'New T',
      content: 'New C'
    }));
    expect(component.editingIndex).toBeNull();
  });

  it('should emit remove event on deleteSection', () => {
    vi.spyOn(component.remove, 'emit');
    
    component.deleteSection(42);
    
    expect(component.remove.emit).toHaveBeenCalledWith(42);
  });
});
