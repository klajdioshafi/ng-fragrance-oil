import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOpenMobileMenu]',
  standalone: true
})
export class OpenMobileMenuDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onclick() {
    let mobileMenu = this.renderer.selectRootElement('#mobile-menu', true); 
    this.renderer.removeClass(mobileMenu, 'hidden');
  }
}
