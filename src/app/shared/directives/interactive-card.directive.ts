import { Directive } from '@angular/core';
import { HoverElevationDirective } from './hover-elevation.directive';
import { ClickLoggerDirective } from './click-logger.directive';

@Directive({
  selector: '[appInteractiveCard]',
  standalone: true,
  // Directive Composition API
  hostDirectives: [
    { directive: HoverElevationDirective },
    { directive: ClickLoggerDirective }
  ]
})
export class InteractiveCardDirective { }