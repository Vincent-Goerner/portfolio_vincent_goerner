import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  changeLanguage: Boolean = false;
  language = this.switchLanguage();
  isScrolled = false;
  showMenu = false;
  translatedData = inject(TranslationService);

  constructor() {
    setInterval(() => {
      this.onWindowScrolled();
    }, 100);
  }

  switchLanguage() {
    this.changeLanguage = !this.changeLanguage;
    return (this.changeLanguage) ? 'EN' : 'DE';
  }

  onWindowScrolled() {
    if (window.scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  showMobileMenu() {
    this.showMenu = !this.showMenu;
  }
}
