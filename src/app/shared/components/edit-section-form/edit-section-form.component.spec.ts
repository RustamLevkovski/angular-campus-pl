import { TestBed } from '@angular/core/testing';
import { EditSectionFormComponent } from './edit-section-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditSectionFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSectionFormComponent, BrowserAnimationsModule],
    }).compileComponents();
  });

  function setup() {
    const fixture = TestBed.createComponent(EditSectionFormComponent);
    const component = fixture.componentInstance;
    return { fixture, component };
  }

  describe('ngOnInit loading content', () => {
    it('loads plain text as a text block', () => {
      const { component, fixture } = setup();
      component.section = { id: 1, title: 'Title', content: 'Plain text', pageName: 'Pg' };
      fixture.detectChanges(); // calls ngOnInit
      
      expect(component.form.value.title).toBe('Title');
      expect(component.contentBlocks.length).toBe(1);
      expect(component.contentBlocks.at(0).value.type).toBe('text');
      expect(component.contentBlocks.at(0).value.textContent).toBe('Plain text');
    });

    it('loads invalid JSON as a plain text block', () => {
      const { component, fixture } = setup();
      component.section = { id: 1, title: 'T', content: '{"invalid": json', pageName: 'Pg' };
      fixture.detectChanges();
      
      expect(component.contentBlocks.length).toBe(1);
      expect(component.contentBlocks.at(0).value.textContent).toBe('{"invalid": json');
    });

    it('loads non-array JSON as plain text block', () => {
      const { component, fixture } = setup();
      component.section = { id: 1, title: 'T', content: '{"type":"text"}', pageName: 'Pg' };
      fixture.detectChanges();
      
      expect(component.contentBlocks.length).toBe(1);
      expect(component.contentBlocks.at(0).value.textContent).toBe('{"type":"text"}');
    });

    it('loads valid structural array JSON', () => {
      const { component, fixture } = setup();
      const mockBlocks = [
        { type: 'title', titleText: 'T1', isBold: true },
        { type: 'ordered-list', listItems: ['A', 'B'] }
      ];
      component.section = { id: 1, title: 'T', content: JSON.stringify(mockBlocks), pageName: 'Pg' };
      fixture.detectChanges();

      expect(component.contentBlocks.length).toBe(2);
      expect(component.contentBlocks.at(0).value.type).toBe('title');
      expect(component.contentBlocks.at(0).value.titleText).toBe('T1');
      expect(component.contentBlocks.at(0).value.isBold).toBe(true);

      expect(component.contentBlocks.at(1).value.type).toBe('ordered-list');
      const listItems = component.getListItems(1);
      expect(listItems.length).toBe(2);
      expect(listItems.at(0).value).toBe('A');
      expect(listItems.at(1).value).toBe('B');
    });

    it('secures empty listItems array falls back to one empty item control for ordered lists', () => {
      const { component, fixture } = setup();
      const mockBlocks = [{ type: 'ordered-list', listItems: [] }];
      component.section = { id: 1, title: 'T', content: JSON.stringify(mockBlocks), pageName: 'Pg' };
      fixture.detectChanges();

      expect(component.contentBlocks.length).toBe(1);
      const listItems = component.getListItems(0);
      expect(listItems.length).toBe(1); // Added empty item inside loadBlock fallback
    });
  });

  describe('block management', () => {
    it('adds and removes blocks', () => {
      const { component, fixture } = setup();
      component.section = { id: 1, title: 'T', content: '[]', pageName: 'Pg' };
      fixture.detectChanges();

      component.addBlock('title');
      expect(component.contentBlocks.length).toBe(1);

      component.removeBlock(0);
      expect(component.contentBlocks.length).toBe(0);
    });

    it('adds and removes list items', () => {
      const { component, fixture } = setup();
      component.section = { id: 1, title: 'T', content: '[]', pageName: 'Pg' };
      fixture.detectChanges();

      component.addBlock('unordered-list');
      const items = component.getListItems(0);
      component.addListItem(items);
      expect(items.length).toBe(2); // One default, one added

      component.removeListItem(items, 1);
      expect(items.length).toBe(1);
    });
    
    it('getFormControl returns the control', () => {
        const { component, fixture } = setup();
        component.section = { id: 1, title: 'T', content: '[]', pageName: 'Pg' };
        fixture.detectChanges();
  
        component.addBlock('unordered-list');
        const items = component.getListItems(0);
        const ctrl = component.getFormControl(items, 0);
        expect(ctrl).toBeTruthy();
    });
  });

  describe('events', () => {
    it('emits save event with serialized blocks and root title when valid', () => {
      const { component, fixture } = setup();
      component.section = { id: 1, title: 'Old Title', content: '[]', pageName: 'Pg' };
      fixture.detectChanges();

      const emitted: any[] = [];
      component.save.subscribe(val => emitted.push(val));

      component.form.patchValue({ title: 'New Title' });
      component.addBlock('text');
      component.contentBlocks.at(0).patchValue({ textContent: 'Some Text' });

      component.submit();

      expect(emitted.length).toBe(1);
      expect(emitted[0].title).toBe('New Title');
      
      const parsed = JSON.parse(emitted[0].content);
      expect(parsed[0].type).toBe('text');
      expect(parsed[0].textContent).toBe('Some Text');
    });

    it('does not emit save event when form is invalid', () => {
      const { component, fixture } = setup();
      component.section = { id: 1, title: 'Old Title', content: '[]', pageName: 'Pg' };
      fixture.detectChanges();

      const emitted: any[] = [];
      component.save.subscribe(val => emitted.push(val));

      component.form.patchValue({ title: '' }); // Makes form invalid
      component.submit();

      expect(emitted.length).toBe(0);
    });

    it('emits cancel event', () => {
      const { component, fixture } = setup();
      component.section = { id: 1, title: 'Old Title', content: '[]', pageName: 'Pg' };
      fixture.detectChanges();

      let canceled = false;
      component.cancel.subscribe(() => canceled = true);

      component.onCancel();
      expect(canceled).toBe(true);
    });
  });
});
