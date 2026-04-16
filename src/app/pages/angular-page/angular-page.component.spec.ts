import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularPageComponent } from './angular-page.component';
import { SectionViewComponent } from '../../shared/components/section-view/section-view.component';

describe('AngularPageComponent', () => {
  let component: AngularPageComponent;
  let fixture: ComponentFixture<AngularPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularPageComponent, SectionViewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AngularPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should pass sections to app-section-view', () => {
    component.sections = [{ id: 1, title: 'T', content: 'C' }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-section-view')).toBeTruthy();
  });
});
