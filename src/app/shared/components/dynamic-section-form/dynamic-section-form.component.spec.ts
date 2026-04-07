import { TestBed } from '@angular/core/testing';
import { DynamicSectionFormComponent } from './dynamic-section-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DynamicSectionFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSectionFormComponent, BrowserAnimationsModule],
    }).compileComponents();
  });

  function setup() {
    const fixture = TestBed.createComponent(DynamicSectionFormComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    return { fixture, component };
  }

  it('creates', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  describe('addBlock', () => {
    it('adds a title block with required validators', () => {
      const { component } = setup();
      component.addBlock('title');
      
      expect(component.contentBlocks.length).toBe(1);
      const block = component.contentBlocks.at(0);
      expect(block.get('type')?.value).toBe('title');
      
      expect(block.get('titleText')?.valid).toBeFalsy();
      block.get('titleText')?.setValue('Title');
      expect(block.get('titleText')?.valid).toBeTruthy();
    });

    it('adds a text block with required validators', () => {
      const { component } = setup();
      component.addBlock('text');
      
      expect(component.contentBlocks.length).toBe(1);
      const block = component.contentBlocks.at(0);
      expect(block.get('type')?.value).toBe('text');
      
      expect(block.get('textContent')?.valid).toBeFalsy();
      block.get('textContent')?.setValue('Text');
      expect(block.get('textContent')?.valid).toBeTruthy();
    });

    it('adds an ordered-list block with one required empty item', () => {
      const { component } = setup();
      component.addBlock('ordered-list');
      
      expect(component.contentBlocks.length).toBe(1);
      const listItems = component.getListItems(0);
      expect(listItems.length).toBe(1);
      
      expect(listItems.at(0).valid).toBeFalsy();
      listItems.at(0).setValue('List Item');
      expect(listItems.at(0).valid).toBeTruthy();
    });

    it('adds an unordered-list block with one required empty item', () => {
      const { component } = setup();
      component.addBlock('unordered-list');
      
      expect(component.contentBlocks.length).toBe(1);
      expect(component.getListItems(0).length).toBe(1);
    });
  });

  describe('removeBlock', () => {
    it('removes block by index', () => {
      const { component } = setup();
      component.addBlock('text');
      component.addBlock('title');
      expect(component.contentBlocks.length).toBe(2);
      
      component.removeBlock(0);
      expect(component.contentBlocks.length).toBe(1);
      expect(component.contentBlocks.at(0).get('type')?.value).toBe('title');
    });
  });

  describe('list management', () => {
    it('adds and removes list items', () => {
      const { component } = setup();
      component.addBlock('unordered-list');
      const listItems = component.getListItems(0);
      
      expect(listItems.length).toBe(1); // Default from addBlock
      
      component.addListItem(listItems);
      expect(listItems.length).toBe(2);
      
      component.removeListItem(listItems, 0);
      expect(listItems.length).toBe(1);
    });

    it('gets particular form control securely', () => {
      const { component } = setup();
      component.addBlock('ordered-list');
      const listItems = component.getListItems(0);
      listItems.at(0).setValue('Val');

      const ctrl = component.getFormControl(listItems, 0);
      expect(ctrl.value).toBe('Val');
    });
  });

  describe('submit', () => {
    it('does not emit when invalid', () => {
      const { component } = setup();
      const emitted: any[] = [];
      component.sectionCreated.subscribe((v) => emitted.push(v));

      component.submit({ resetForm: vi.fn() } as any);
      expect(emitted).toEqual([]);
    });

    it('emits sectionCreated with serialized structural JSON array and resets form when valid', () => {
      const { component } = setup();
      const emitted: any[] = [];
      component.sectionCreated.subscribe((v) => emitted.push(v));

      // Title must be valid and filled
      component.form.patchValue({ title: 'My Section' });

      // Add Text Block
      component.addBlock('text');
      component.contentBlocks.at(0).patchValue({ textContent: 'Text Val' });

      // Add Ordered List Block
      component.addBlock('ordered-list');
      component.getListItems(1).at(0).setValue('Item 1');

      const resetFormSpy = vi.fn();
      component.submit({ resetForm: resetFormSpy } as any);

      expect(emitted.length).toBe(1);
      expect(emitted[0].title).toBe('My Section');
      
      const parsed = JSON.parse(emitted[0].content);
      expect(parsed.length).toBe(2);
      expect(parsed[0].type).toBe('text');
      expect(parsed[0].textContent).toBe('Text Val');
      expect(parsed[1].type).toBe('ordered-list');
      expect(parsed[1].listItems).toEqual(['Item 1']);

      // Form gets reset
      expect(component.form.value.title).toBe(null);
      expect(component.contentBlocks.length).toBe(0);
      expect(resetFormSpy).toHaveBeenCalled();
    });
  });
});
