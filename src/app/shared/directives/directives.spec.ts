import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClickLoggerDirective } from './click-logger.directive';
import { HoverElevationDirective } from './hover-elevation.directive';
import { InteractiveCardDirective } from './interactive-card.directive';

@Component({
  standalone: true,
  imports: [ClickLoggerDirective, HoverElevationDirective, InteractiveCardDirective],
  template: `
    <div id="click" appClickLogger>Click</div>
    <div id="hover" appHoverElevation>Hover</div>
    <div id="card" appInteractiveCard>Card</div>
  `,
})
class HostComponent {}

describe('Directives', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
    }).compileComponents();
  });

  it('ClickLoggerDirective logs on click', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('#click') as HTMLElement;
    el.click();

    expect(log).toHaveBeenCalledTimes(1);
    expect(log.mock.calls[0]?.[0]).toBe('Element clicked at:');
  });

  it('HoverElevationDirective adds/removes class on hover', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('#hover') as HTMLElement;

    el.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(el.classList.contains('mat-elevation-z8')).toBe(true);

    el.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(el.classList.contains('mat-elevation-z8')).toBe(false);
  });

  it('InteractiveCardDirective composes hover + click behaviors', () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelector('#card') as HTMLElement;

    el.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(el.classList.contains('mat-elevation-z8')).toBe(true);

    el.click();
    expect(log).toHaveBeenCalled();
  });
});

