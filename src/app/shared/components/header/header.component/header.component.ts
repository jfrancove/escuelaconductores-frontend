import { Component, inject } from '@angular/core';
import { MenuServices } from '../../../services/menu.services';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private menuService=inject(MenuServices)

  isShoMenu() {
    this.menuService.toggleMenu();
  }

}
