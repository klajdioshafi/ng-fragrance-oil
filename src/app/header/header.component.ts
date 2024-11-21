import { Component } from '@angular/core';
import { OpenMobileMenuDirective } from '../custom/directives/open-mobile-menu.directive';
import { CloseMobileMenuDirective } from '../custom/directives/close-mobile-menu.directive';
import { RouterModule } from '@angular/router';
import { OpenShoppingCartDirective } from '../custom/directives/open-shopping-cart.directive';
import { CloseShoppingCartDirective } from '../custom/directives/close-shopping-cart.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, OpenMobileMenuDirective, CloseMobileMenuDirective, OpenShoppingCartDirective, CloseShoppingCartDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
