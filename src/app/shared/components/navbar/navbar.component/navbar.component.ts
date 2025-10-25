import { Component, inject } from '@angular/core';
import { MenuServices } from '../../../services/menu.services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    private menuService=inject(MenuServices)
    isShoMenu() {
    this.menuService.toggleMenu();
  }

}
