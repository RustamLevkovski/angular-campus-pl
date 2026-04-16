import { Directive } from '@angular/core';
import { HoverElevationDirective } from './hover-elevation.directive';
import { ClickLoggerDirective } from './click-logger.directive';

@Directive({
  selector: '[appInteractiveCard]',
  standalone: true,
  //   Use Directive Composition API  for HoverElevationDirective and ClickLoggerDirective



})
export class InteractiveCardDirective { }