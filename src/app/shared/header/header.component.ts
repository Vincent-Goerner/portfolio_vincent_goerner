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
  language = '';
  isScrolled = false;
  showMenu = false;
  translatedData = inject(TranslationService);

  constructor() {
    this.switchLanguage()

    setInterval(() => {
      this.onWindowScrolled();
    }, 100);
  }

  switchLanguage() {
    this.changeLanguage = !this.changeLanguage;
    this.language = (this.changeLanguage) ? 'EN' : 'DE';
    this.translatedData.selectedLanguage = (this.changeLanguage) ? 0 : 1;
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

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}
