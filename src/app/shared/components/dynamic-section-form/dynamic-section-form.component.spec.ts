import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicSectionFormComponent } from './dynamic-section-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroupDirective } from '@angular/forms';

describe('DynamicSectionFormComponent', () => {
  let component: DynamicSectionFormComponent;
  let fixture: ComponentFixture<DynamicSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSectionFormComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicSectionFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should add different types of blocks correctly', () => {
    fixture.detectChanges();
    component.addBlock('title');
    component.addBlock('text');
    component.addBlock('ordered-list');
    fixture.detectChanges();
    
    expect(component.contentBlocks.length).toEqual(3);
    expect(component.contentBlocks.at(0).get('type')?.value).toBe('title');
    expect(component.contentBlocks.at(1).get('type')?.value).toBe('text');
    expect(component.contentBlocks.at(2).get('type')?.value).toBe('ordered-list');
  });

  it('should remove a block', () => {
    fixture.detectChanges();
    component.addBlock('text');
    component.addBlock('title');
    fixture.detectChanges();
    
    component.removeBlock(0);
    
    expect(component.contentBlocks.length).toEqual(1);
    expect(component.contentBlocks.at(0).get('type')?.value).toBe('title');
  });

  it('should emit sectionCreated and reset form on valid submit', () => {
    const mockFormDirective = { resetForm: vi.fn() } as unknown as FormGroupDirective;
    vi.spyOn(component.sectionCreated, 'emit');
    
    component.form.patchValue({ title: 'My New Section' });
    component.addBlock('text');
    component.contentBlocks.at(0).get('textContent')?.setValue('This is content');
    fixture.detectChanges();
    
    component.submit(mockFormDirective);
    
    expect(component.sectionCreated.emit).toHaveBeenCalledWith(expect.objectContaining({
      title: 'My New Section',
      content: expect.stringMatching('textContent')
    }));
    expect(mockFormDirective.resetForm).toHaveBeenCalled();
    expect(component.contentBlocks.length).toBe(0);
  });

  it('should not emit if form is invalid', () => {
    const mockFormDirective = { resetForm: vi.fn() } as unknown as FormGroupDirective;
    vi.spyOn(component.sectionCreated, 'emit');
    
    component.form.patchValue({ title: '' }); // invalid
    component.submit(mockFormDirective);
    
    expect(component.sectionCreated.emit).not.toHaveBeenCalled();
  });

  it('should allow adding and removing list items', () => {
    fixture.detectChanges();
    component.addBlock('unordered-list');
    fixture.detectChanges();
    const listItems = component.getListItems(0);
    
    component.addListItem(listItems);
    expect(listItems.length).toBe(2); // Starts with 1 by default
    
    component.removeListItem(listItems, 0);
    expect(listItems.length).toBe(1);
  });
});
