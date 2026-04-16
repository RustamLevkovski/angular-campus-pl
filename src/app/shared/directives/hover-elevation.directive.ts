import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appHoverElevation]',
  standalone: true
})
export class HoverElevationDirective {
  //inject ElementRef (el) and Renderer2 (renderer)

  //use HostListener to listen to mouseenter events on the host element - call it onMouseEnter()
  //add the mat-elevation-z8 class to the host element

  //use HostListener to listen to mouseleave events on the host element - call it onMouseLeave()
  //remove the mat-elevation-z8 class to the host element

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'mat-elevation-z8');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'mat-elevation-z8');
  }

}