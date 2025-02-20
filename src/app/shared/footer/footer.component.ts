import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translatedData = inject(TranslationService);

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}
