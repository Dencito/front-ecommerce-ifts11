import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  location:any= window.location.pathname == '/login' || window.location.pathname == '/register' ? true: false
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  logout() {
    // Lógica para cerrar sesión
  }
}
