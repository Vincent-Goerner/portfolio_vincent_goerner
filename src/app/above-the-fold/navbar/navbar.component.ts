import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  changeLanguage: Boolean = true;
  language: string = this.switchLanguage();

  switchLanguage() {
    this.changeLanguage = !this.changeLanguage;
    return (this.changeLanguage) ? 'EN' : 'DE';
  }
}
