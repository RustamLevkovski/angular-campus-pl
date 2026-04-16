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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, HoverElevationDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    div = fixture.debugElement.query(By.directive(HoverElevationDirective)).nativeElement;
  });

  it('should add "mat-elevation-z8" class on mouseenter', () => {
    div.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(div.classList.contains('mat-elevation-z8')).toBe(true);
  });

  it('should remove "mat-elevation-z8" class on mouseleave', () => {
    div.classList.add('mat-elevation-z8'); // manually add first
    div.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    expect(div.classList.contains('mat-elevation-z8')).toBe(false);
  });
});
