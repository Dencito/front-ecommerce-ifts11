import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public router: Router) { }

  location:any= window.location.pathname == '/login' || window.location.pathname == '/register' ? true: false
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateTo() {
    this.router.navigate(['']);
  }

  logout() {
    // Lógica para cerrar sesión
  }
}
