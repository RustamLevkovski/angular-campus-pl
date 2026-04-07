import { TestBed } from '@angular/core/testing';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  it('creates', async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(RegisterPageComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});

