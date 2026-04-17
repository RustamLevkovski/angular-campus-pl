import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsPageComponent } from './js-page.component';
import { MenuService } from '../../core/services/menu.service';
import { SectionsService } from '../../core/services/sections.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('JsPageComponent', () => {
  let component: JsPageComponent;
  let fixture: ComponentFixture<JsPageComponent>;
  let mockMenuService: any;
  let mockSectionsService: any;

  beforeEach(async () => {
    mockMenuService = {
      setCurrentPage: vi.fn()
    };
    mockSectionsService = {
      ensureInitialSections: vi.fn(),
      getSectionsForPage: vi.fn().mockReturnValue(of([{ id: 1, title: 'Test Section', content: 'test content' }])),
      addSection: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [JsPageComponent, NoopAnimationsModule],
      providers: [
        { provide: MenuService, useValue: mockMenuService },
        { provide: SectionsService, useValue: mockSectionsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(JsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and load sections', () => {
    expect(component).toBeTruthy();
    expect(mockMenuService.setCurrentPage).toHaveBeenCalledWith('javascript');
    expect(mockSectionsService.ensureInitialSections).toHaveBeenCalled();
    component.sections$.subscribe(sections => {
      expect(sections.length).toBe(1);
    });
  });

  it('should toggle form', () => {
    expect(component.showForm).toBe(false);
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.showForm).toBe(true);
  });

  it('should add section', () => {
    component.onSectionCreated({ title: 'New', content: 'C' });
    expect(mockSectionsService.addSection).toHaveBeenCalledWith('javascript', 'New', 'C');
    expect(component.showForm).toBe(false);
  });
});
