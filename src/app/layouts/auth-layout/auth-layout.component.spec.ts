import { TestBed } from '@angular/core/testing';
import { AuthLayoutComponent } from './auth-layout.component';

describe('AuthLayoutComponent', () => {
  it('creates', async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayoutComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(AuthLayoutComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

