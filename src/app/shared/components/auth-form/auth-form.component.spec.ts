import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormComponent } from './auth-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthFormComponent', () => {
  let component: AuthFormComponent;
  let fixture: ComponentFixture<AuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormComponent, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have correct title based on mode', () => {
    component.mode = 'login';
    expect(component.title).toBe('Login');
    
    component.mode = 'register';
    expect(component.title).toBe('Sign up');
  });

  it('should emit submitted event on onSubmit', () => {
    const spy = vi.spyOn(component.submitted, 'emit');
    const mockEvent = {
       preventDefault: () => {}
    };
    component.onSubmit(mockEvent);
    expect(spy).toHaveBeenCalledWith({ mode: component.mode });
  });
});
