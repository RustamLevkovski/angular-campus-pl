import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { TopNavbarComponent } from './top-navbar.component';

describe('TopNavbarComponent', () => {
  it('creates', async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavbarComponent],
      providers: [
        {
          provide: Router,
          useValue: {
            events: of(),
            createUrlTree: vi.fn(),
            serializeUrl: vi.fn(),
            navigateByUrl: vi.fn(),
            isActive: vi.fn(),
          },
        },
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(TopNavbarComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

