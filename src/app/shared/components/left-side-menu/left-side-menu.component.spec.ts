import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftSideMenuComponent } from './left-side-menu.component';
import { MenuService } from '../../../core/services/menu.service';
import { of } from 'rxjs';

describe('LeftSideMenuComponent', () => {
  let component: LeftSideMenuComponent;
  let fixture: ComponentFixture<LeftSideMenuComponent>;

  beforeEach(async () => {
    const mockMenuService = {
      sections$: of([{ label: 'Test Label', anchor: '#test' }])
    };

    await TestBed.configureTestingModule({
      imports: [LeftSideMenuComponent],
      providers: [
        { provide: MenuService, useValue: mockMenuService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and render items', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Test Label');
    expect(compiled.querySelector('a')?.getAttribute('href')).toBe('#test');
  });
});
