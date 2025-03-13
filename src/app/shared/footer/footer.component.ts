import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translatedData = inject(TranslationService);
  router = inject(Router);
  github = "https://github.com/A1exi0sD4rc";
  linkedin = "https://www.linkedin.com/in/vincent-g%C3%B6rner-3b48a6353/";

  /**
    * Returns the translated path for the selected language.
    *
    * @returns {string} The translated path for the selected language.
  */
  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }

  /**
    * Navigates to the legal notice (imprint) page and scrolls to the top after a short delay.
    *
    * @returns {void}
  */
  openImprint() {
    this.router.navigateByUrl('legal-notice');
    setTimeout(() => {
      this.scrollToTop();
    }, 100);
  }

  /**
    * Scrolls the window to the top.
    *
    * @returns {void}
  */
  scrollToTop() {
    window.scrollTo({
      top: 0,
    })
  }
  
  /**
    * Opens a new browser tab with the specified URL.
    *
    * @param {string} a - The URL to open in the new tab.
    * @returns {void}
  */
  openNewTab(a: string) {
    window.open(a);
  }
}
