import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { MenuService } from '../../../core/services/menu.service';
import { LeftSideMenuComponent } from './left-side-menu.component';

describe('LeftSideMenuComponent', () => {
  it('exposes MenuService.sections$ as items$', async () => {
    const menuService = { sections$: of([{ label: 'L', anchor: '#a' }]) } as unknown as MenuService;

    await TestBed.configureTestingModule({
      imports: [LeftSideMenuComponent],
      providers: [{ provide: MenuService, useValue: menuService }],
    }).compileComponents();

    const fixture = TestBed.createComponent(LeftSideMenuComponent);
    fixture.detectChanges();

    const value = await firstValueFrom(fixture.componentInstance.items$);

    expect(value).toEqual([{ label: 'L', anchor: '#a' }]);
  });
});

