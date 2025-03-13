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

  /**
    * Toggles between English and German language.
    * Updates the `language` and `translatedData.selectedLanguage` based on the current state.
    *
    * @returns {void}
  */
  switchLanguage() {
    this.changeLanguage = !this.changeLanguage;
    this.language = (this.changeLanguage) ? 'EN' : 'DE';
    this.translatedData.selectedLanguage = (this.changeLanguage) ? 0 : 1;
  }

  /**
    * Updates the `isScrolled` property based on the current scroll position of the window.
    * Sets `isScrolled` to true if the window has been scrolled down, and false if it's at the top.
    *
    * @returns {void}
  */
  onWindowScrolled() {
    if (window.scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  /**
    * Toggles the visibility of the mobile menu.
    * Sets `showMenu` to true if the menu is hidden, or false if the menu is visible.
    *
    * @returns {void}
  */
  showMobileMenu() {
    this.showMenu = !this.showMenu;
  }

  /**
    * Returns the translated path for the selected language.
    *
    * @returns {string} The translated path for the selected language.
  */
  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}
