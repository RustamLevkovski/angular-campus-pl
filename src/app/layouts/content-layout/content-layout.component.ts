import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';

import { TopNavbarComponent } from '../../shared/components/top-navbar/top-navbar.component';
import { LeftSideMenuComponent } from '../../shared/components/left-side-menu/left-side-menu.component';

@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [TopNavbarComponent, LeftSideMenuComponent, RouterOutlet],
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

