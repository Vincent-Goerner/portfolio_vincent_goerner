import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  translatedData = inject(TranslationService);
  
  /**
    * Returns the translated path for the selected language.
    *
    * @returns {string} The translated path for the selected language.
  */
  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}
