import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})

export class AboveTheFoldComponent {
  translatedData = inject(TranslationService);
  github = "https://github.com/A1exi0sD4rc";
  linkedin = "https://www.linkedin.com/in/vincent-g%C3%B6rner-3b48a6353/";

  constructor() {
  }

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
  
  openNewTab(a: string) {
    window.open(a);
  }
}