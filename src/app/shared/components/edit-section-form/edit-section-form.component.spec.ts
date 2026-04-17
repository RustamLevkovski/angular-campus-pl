import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSectionFormComponent } from './edit-section-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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

  it('should create', () => {
    component.section = { id: 1, title: 'Title', content: 'content' };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should patch title on init', () => {
    component.section = { id: 1, title: 'Test Title', content: 'content' };
    fixture.detectChanges();
    expect(component.form.value.title).toBe('Test Title');
  });

  it('should load text content array on init', () => {
    component.section = { id: 1, title: 'Test', content: [{ type: 'title', titleText: 'Hello' }] } as any;
    fixture.detectChanges();
    expect(component.contentBlocks.length).toBe(1);
    expect(component.contentBlocks.at(0).get('type')?.value).toBe('title');
  });

  it('should parse json array string on init', () => {
    component.section = { id: 1, title: 'Test', content: '[{"type":"text","textContent":"Hello"}]' };
    fixture.detectChanges();
    expect(component.contentBlocks.length).toBe(1);
    expect(component.contentBlocks.at(0).get('textContent')?.value).toBe('Hello');
  });

  it('should add different types of blocks', () => {
    component.section = { id: 1, title: 'Test Title', content: 'content' };
    fixture.detectChanges();
    const len = component.contentBlocks.length;
    component.addBlock('title');
    component.addBlock('text');
    component.addBlock('ordered-list');
    fixture.detectChanges();
    expect(component.contentBlocks.length).toBe(len + 3);
  });

  it('should remove a block', () => {
    component.section = { id: 1, title: 'Test Title', content: 'content' };
    fixture.detectChanges();
    component.addBlock('text');
    fixture.detectChanges();
    const index = component.contentBlocks.length - 1;
    component.removeBlock(index);
    fixture.detectChanges();
    expect(component.contentBlocks.length).toBe(index);
  });

  it('should add and remove list items', () => {
    component.section = { id: 1, title: 'Test', content: 'content' };
    fixture.detectChanges();
    component.addBlock('ordered-list');
    const listItems = component.getListItems(component.contentBlocks.length - 1);
    component.addListItem(listItems);
    const count = listItems.length;
    component.removeListItem(listItems, 0);
    expect(listItems.length).toBe(count - 1);
  });

  it('should emit save on valid submit', () => {
    component.section = { id: 1, title: 'Test', content: 'content' };
    fixture.detectChanges();
    vi.spyOn(component.save, 'emit');
    component.form.patchValue({ title: 'New Title' });
    component.submit();
    expect(component.save.emit).toHaveBeenCalled();
  });

  it('should not emit save on invalid submit', () => {
    component.section = { id: 1, title: 'Test', content: 'content' };
    fixture.detectChanges();
    vi.spyOn(component.save, 'emit');
    component.form.patchValue({ title: '' }); // invalid
    component.submit();
    expect(component.save.emit).not.toHaveBeenCalled();
  });

  it('should emit cancel on cancel edit', () => {
    component.section = { id: 1, title: 'Test', content: 'content' };
    fixture.detectChanges();
    vi.spyOn(component.cancel, 'emit');
    component.onCancel();
    expect(component.cancel.emit).toHaveBeenCalled();
  });
});
