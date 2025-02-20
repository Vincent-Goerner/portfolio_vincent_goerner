import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  translatedData = inject(TranslationService);

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}
