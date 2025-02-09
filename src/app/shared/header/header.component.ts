import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  changeLanguage: Boolean = false;
  language: string = this.switchLanguage();
  isScrolled = false;

  constructor() {
    setInterval(() => {
      this.onWindowScrolled();
    }, 100);    
  }

  switchLanguage() {
    this.changeLanguage = !this.changeLanguage;
    return this.language = (this.changeLanguage) ? 'EN' : 'DE';
  }

  onWindowScrolled() {
    if (window.scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
