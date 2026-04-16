import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickLogger]',
  standalone: true
})
export class ClickLoggerDirective {
  //Use HostListener to listen to click events on the host element
  //log the time of the click event to the console


}