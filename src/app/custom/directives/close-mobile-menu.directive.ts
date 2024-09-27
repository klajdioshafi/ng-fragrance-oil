import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCloseMobileMenu]',
  standalone: true
})
export class CloseMobileMenuDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onclick() {
    let mobileMenu = this.renderer.selectRootElement('#mobile-menu', true); 
    this.renderer.addClass(mobileMenu, 'hidden');
  }

}
