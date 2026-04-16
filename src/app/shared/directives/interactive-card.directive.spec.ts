import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InteractiveCardDirective } from './interactive-card.directive';
import { HoverElevationDirective } from './hover-elevation.directive';
import { ClickLoggerDirective } from './click-logger.directive';

@Component({
  standalone: true,
  template: `<div appInteractiveCard>Combined Behaviors</div>`,
  imports: [InteractiveCardDirective]
})
class TestComponent {}

describe('InteractiveCardDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let div: HTMLElement;

  beforeEach(async () => {
    vi.spyOn(console, 'log');
    await TestBed.configureTestingModule({
      imports: [TestComponent, InteractiveCardDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    div = fixture.debugElement.query(By.directive(InteractiveCardDirective)).nativeElement;
  });

  it('should apply both elevation and logging on interactions', () => {
    // Check elevation
    div.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(div.classList.contains('mat-elevation-z8')).toBe(true);
    
    // Check logging
    div.click();
    expect(console.log).toHaveBeenCalled();
  });
});
