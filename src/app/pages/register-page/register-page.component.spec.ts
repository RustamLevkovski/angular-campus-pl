import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPageComponent } from './register-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onLogin with the event', () => {
    vi.spyOn(console, 'log');
    component.onLogin({ mode: 'register' });
    expect(console.log).toHaveBeenCalledWith({ mode: 'register' });
  });
});
