import { TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  it('creates', async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(LoginPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

