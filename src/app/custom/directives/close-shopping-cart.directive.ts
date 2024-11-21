import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCloseShoppingCart]',
  standalone: true
})
export class CloseShoppingCartDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onclick() {
    let shoppingCart = this.renderer.selectRootElement('#shopping-cart', true); 
    this.renderer.addClass(shoppingCart, 'hidden');
  }

}
