import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNavbarComponent } from './top-navbar.component';

describe('TopNavbarComponent', () => {
  let component: TopNavbarComponent;
  let fixture: ComponentFixture<TopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 navigation links defined', () => {
    expect(component.links.length).toBe(3);
  });

  it('should have Angular, JavaScript, and Web Development links', () => {
    const labels = component.links.map(l => l.label);
    expect(labels).toContain('Angular');
    expect(labels).toContain('JavaScript');
    expect(labels).toContain('Web Development');
  });

  it('should have correct URLs for each link', () => {
    const urls = component.links.map(l => l.url);
    expect(urls).toContain('/angular');
    expect(urls).toContain('/javascript');
    expect(urls).toContain('/webdev');
  });
});
