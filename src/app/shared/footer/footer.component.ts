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

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }

  openImprint() {
    this.router.navigateByUrl('legal-notice');
    setTimeout(() => {
      this.scrollToTop();
    }, 100);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
    })
  }
}
