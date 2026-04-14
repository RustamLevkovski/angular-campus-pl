// Lesson 4 Disable Services and Routes. import { TestBed } from '@angular/core/testing';
// Lesson 4 Disable Services and Routes. import { firstValueFrom, of } from 'rxjs';
// Lesson 4 Disable Services and Routes. import { MenuService } from '../../../core/services/menu.service';
// Lesson 4 Disable Services and Routes. import { LeftSideMenuComponent } from './left-side-menu.component';

describe('LeftSideMenuComponent', () => {
  it.skip('Lesson 4 Disable Services and Routes. MenuService-dependent test is commented out', () => {
    // Lesson 4 Disable Services and Routes. intentionally skipped
  });
});

// Lesson 4 Disable Services and Routes. describe('LeftSideMenuComponent', () => {
// Lesson 4 Disable Services and Routes.   it('exposes MenuService.sections$ as items$', async () => {
// Lesson 4 Disable Services and Routes.     const menuService = { sections$: of([{ label: 'L', anchor: '#a' }]) } as unknown as MenuService;
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     await TestBed.configureTestingModule({
// Lesson 4 Disable Services and Routes.       imports: [LeftSideMenuComponent],
// Lesson 4 Disable Services and Routes.       providers: [{ provide: MenuService, useValue: menuService }],
// Lesson 4 Disable Services and Routes.     }).compileComponents();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const fixture = TestBed.createComponent(LeftSideMenuComponent);
// Lesson 4 Disable Services and Routes.     fixture.detectChanges();
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     const value = await firstValueFrom(fixture.componentInstance.items$);
// Lesson 4 Disable Services and Routes.
// Lesson 4 Disable Services and Routes.     expect(value).toEqual([{ label: 'L', anchor: '#a' }]);
// Lesson 4 Disable Services and Routes.   });
// Lesson 4 Disable Services and Routes. });

