import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  it('creates', async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPageComponent],
      providers: [
        { provide: Router, useValue: { createUrlTree: vi.fn(), serializeUrl: vi.fn(), navigateByUrl: vi.fn() } },
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(NotFoundPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

