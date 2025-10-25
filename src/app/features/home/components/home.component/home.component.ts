import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../../shared/components/header/header.component/header.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component/navbar.component';

@Component({
  selector: 'app-home.component',
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
