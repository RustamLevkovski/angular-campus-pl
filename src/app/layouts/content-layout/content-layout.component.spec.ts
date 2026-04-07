import { TestBed } from '@angular/core/testing';
import { RouterOutlet, provideRouter } from '@angular/router';
import { ContentLayoutComponent } from './content-layout.component';
import { TopNavbarComponent } from '../../shared/components/top-navbar/top-navbar.component';
import { LeftSideMenuComponent } from '../../shared/components/left-side-menu/left-side-menu.component';

import { provideMockStore } from '@ngrx/store/testing';

describe('ContentLayoutComponent', () => {
  it('creates the component successfully', async () => {
    await TestBed.configureTestingModule({
      imports: [ContentLayoutComponent, TopNavbarComponent, LeftSideMenuComponent],
      providers: [provideRouter([]), provideMockStore({})]
    }).compileComponents();

    const fixture = TestBed.createComponent(ContentLayoutComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

