import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOpenShoppingCart]',
  standalone: true
})
export class OpenShoppingCartDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onclick() {
    let shoppingCart = this.renderer.selectRootElement('#shopping-cart', true); 
    this.renderer.removeClass(shoppingCart, 'hidden');
  }

}
