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

  constructor() {
  }

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}