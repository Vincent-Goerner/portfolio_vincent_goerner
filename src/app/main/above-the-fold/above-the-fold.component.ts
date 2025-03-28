import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})

export class AboveTheFoldComponent {
  translatedData = inject(TranslationService);
  github = "https://github.com/A1exi0sD4rc";
  linkedin = "https://www.linkedin.com/in/vincent-g%C3%B6rner-3b48a6353/";

  constructor() {
  }

  /**
    * Returns the translated path for the selected language.
    *
    * @returns {string} The translated path for the selected language.
  */
  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
  
  /**
    * Opens a new tab with the specified URL.
    *
    * @param {string} a - The URL to open in the new tab.
  */
  openNewTab(a: string) {
    window.open(a);
  }
}