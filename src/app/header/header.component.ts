import { Component } from '@angular/core';
import { OpenMobileMenuDirective } from '../custom/directives/open-mobile-menu.directive';
import { CloseMobileMenuDirective } from '../custom/directives/close-mobile-menu.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, OpenMobileMenuDirective, CloseMobileMenuDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
