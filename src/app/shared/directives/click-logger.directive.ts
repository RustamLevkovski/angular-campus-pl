import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickLogger]',
  standalone: true
})
export class ClickLoggerDirective {
  @HostListener('click') onClick() {
    console.log('Element clicked at:', new Date().toISOString());
  }
}