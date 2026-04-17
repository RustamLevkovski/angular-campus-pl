import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverElevationDirective } from './hover-elevation.directive';

@Component({
  standalone: true,
  template: `<div appHoverElevation>Test Card</div>`,
  imports: [HoverElevationDirective]
})
class TestComponent {}

describe('HoverElevationDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let div: HTMLElement;
  let directiveInstance: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, HoverElevationDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const debugEl = fixture.debugElement.query(By.directive(HoverElevationDirective));
    div = debugEl.nativeElement;
    directiveInstance = debugEl.injector.get(HoverElevationDirective);
  });

  it('should add "mat-elevation-z8" class on mouseenter', () => {
    directiveInstance.onMouseEnter();
    expect(div.classList.contains('mat-elevation-z8')).toBe(true);
  });

  it('should remove "mat-elevation-z8" class on mouseleave', () => {
    div.classList.add('mat-elevation-z8');
    directiveInstance.onMouseLeave();
    expect(div.classList.contains('mat-elevation-z8')).toBe(false);
  });
});
